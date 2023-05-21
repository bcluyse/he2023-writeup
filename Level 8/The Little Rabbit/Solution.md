```
Oh no! Someone encrypted my poem, using a One-Time-Pad.

Good news: Each line was encrypted individually, with the same key.

Bad news: The plaintext was changed _somehow_, before encryption.

[[HackyEaster.2023/Level 8/The Little Rabbit/cipher.txt]]
```

One-time pads should never be reused, this makes it vulnerable to a crib drag attack.
We can try to figure out the key progressively by guessing words which might be present. But first we need to figure out what operation has been executed on the plaintext, otherwise we will not be able to guess words.


#### Finding the transformation before encryption
In the title of the cipher.txt, we can see 
`The Little Rabbit Ohaal`

Which looks quite strange.

`Ohaal` seems like it has been transformed, and putting it in a simple ROT13 cipher brute force, we can find the 2 following words being formed:

- 4: sleep
- 13: bunny

Of course, bunny immediately catches our attention since we are competing in Hacky Easter but we should probably keep our options open.

#### Cribdrag attack on the different texts