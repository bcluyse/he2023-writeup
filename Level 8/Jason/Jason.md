```
Jason has implemented an information service.

He has hidden a flag in it, can you find it?

Connect to the server:

-   `nc ch.hackyeaster.com 2304`

Note: The service is restarted every hour at x:00.
```

We get a commandline interface which can query certain fields.
The name seems to refer to JSON and we notice a few things quite quickly:

- There is a periodic error `Something went wrong`
- Some input gives interesting output
	- name -> Jason
	- ...
	- [] -> Jason
	- 1 -> 0.1
	- c+2 -> 2
	- var=1 -> {
	- . -> {
	- randominput -> null

After some thinking and research, this seems like the responses from jq. So let's start thinking how we can go over all keys.

E.g.

```
> [keys[0]]
Result: "Sydney"

> [keys[1]]
Result: "Australia"

> [keys[2]]
Result: {

> [keys[3]]
Result: "Jason"

> [keys[4]]
Result: "100 Kent St"

> [keys[5]]
Result: "Hamstat"

> [keys[6]]
Something went wrong.
```

It seems like there is something hidden in key 2.

```
> [keys[2]] | .[]
Result: "he2023{gr3pp1n_d4_js0n_l1k3_4_pr0!}"
```