Get the 🚩 at `/flag`.

[http://ch.hackyeaster.com:2316](http://ch.hackyeaster.com:2316/)

If you try to ping the `flag` endpoint it gives you a message saying the flag is in another castle.

If you check in the network tab, you see that the requests are being redirected to 
http://ch.hackyeaster.com:2316/get?url=http://trek:1337/trek

for key trek

It seems like the server is doing get requests to another server running on another port.

Maybe we could try to make it serve from its own file system.
```
curl -X GET http://ch.hackyeaster.com:2316/get?url=file:///flag
```
