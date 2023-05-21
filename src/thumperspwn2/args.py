from pwn import *

binary = ELF("./main")
remote_libc1 = ELF("./libc6_2.27-3ubuntu1.5_amd64.so")
remote_libc2 = ELF("./libc6_2.27-3ubuntu1.6_amd64.so")

rop = ROP(binary)
ropc1 = ROP(remote_libc1)
ropc2 = ROP(remote_libc2)

print("test")