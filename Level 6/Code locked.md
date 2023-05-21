We get forwarded to a site which has a digital lock.
| * to clear | 8 numbers | # open

So we probably need to find a 8 number keycode.

We are sending 8 numbers to the wasm library and everything else is wasmemory.buffer

The easiest way at first sight is to brute force the webassembly. So we copy the whole webpage to a local setup (see src folder). And we rewrite the code to basically try all availale combinations.

Which eventually gives us
he2023{w3b4553m81y_15_FUN}