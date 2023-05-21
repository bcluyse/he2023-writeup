I got a flag, but it's encrypted somehow:  
`ip0232j{1t_x_v0z4b3bm__v4xvq}a`

It was created using the following service:

[http://ch.hackyeaster.com:2305](http://ch.hackyeaster.com:2305/)

We can immediately see that the first part got scrambled somehow.
If you enter the first part
http://ch.hackyeaster.com:2305/encrypt?s=he2023{test}

You already see the first part of the encrypted flag of coming through.
The name of the assignment also seems to indicate that the flag can be found by 'going round', so if we just re-encrypt the encrypted flag by sending the requests to the encrypt URL , we finally end up with (see source code)

he2023{fl1p_n_r0t4t3_in_p4irs}