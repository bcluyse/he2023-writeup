This awesome service can flipflop an image!

Flag is located at: `/flag.txt`

You can upload your image and it returns it reversed.
Trying to fetch the file directly does not seem to work.
So we probably need to find an upload vulnerability in the server.

It is running Werkzeug 1.0.1 with Python 3.8 and seems to be running ImageMagick

There seem to be ImageMagick vulnerabillities when adding text delimiters to PNG files when they are being converted:
https://github.com/voidz0r/CVE-2022-44268

After following the work method documented in 
https://www.uptycs.com/blog/denial-of-servicedos-and-arbitrary-file-read-vulnerability-in-imagemagick

By using tools like pngcrush you can generate a corrupted png file which will read the /flag.txt file and after decoding the hex that is returned in the file.

```
pngcrush -text a "profile" "/flag.txt" sample.png
```

Ending the png file with the following hex:
![[Pasted image 20230408005541.png]]

We find the following flag:
he2023{1m4g3-tr4g1cK-aga111n}
