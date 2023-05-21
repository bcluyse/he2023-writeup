The given text file contains the following text

```
// // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // //

Tom's Diary

\/\ \\\/ / \/\ /\\ /\ \/\ //\ /\/ /\// //\/ /\// /\/ //\ /\\\ \\/\
\/\ \\\/ / \/\ /\\ /\ \/\ //\ /\/ /\// //\/ /\// /\/ //\ /\\\ \\/\

Dear diary,

today I found a secret flag.

I need to keep it safe here:

UEsDBAoACQAAAJJEK1X6oNHsKgAAAB4AAAAIABwAZmxhZy50eHRVVAkAA/OBHWOR
gR1jdXgLAAEE9QEAAAQUAAAArGnVXoZRCLYaWU8HFSFo+dWfh2yfPa868sNqxTVP
xqHrGTs3dIVbxR9WUEsHCPqg0ewqAAAAHgAAAFBLAQIeAwoACQAAAJJEK1X6oNHs
KgAAAB4AAAAIABgAAAAAAAEAAACkgQAAAABmbGFnLnR4dFVUBQAD84EdY3V4CwAB
BPUBAAAEFAAAAFBLBQYAAAAAAQABAE4AAAB8AAAAAAA=

\\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\
\\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\

```

The value that is being kept safe looks base64 encoded:
https://gchq.github.io/CyberChef/#recipe=From_Base64('A-Za-z0-9%2B/%3D',true,false)Detect_File_Type(true,true,true,true,true,true,true)&input=VUVzREJBb0FDUUFBQUpKRUsxWDZvTkhzS2dBQUFCNEFBQUFJQUJ3QVpteGhaeTUwZUhSVlZBa0FBL09CSFdPUgpnUjFqZFhnTEFBRUU5UUVBQUFRVUFBQUFyR25WWG9aUkNMWWFXVThIRlNGbytkV2ZoMnlmUGE4NjhzTnF4VFZQCnhxSHJHVHMzZElWYnhSOVdVRXNIQ1BxZzBld3FBQUFBSGdBQUFGQkxBUUllQXdvQUNRQUFBSkpFSzFYNm9OSHMKS2dBQUFCNEFBQUFJQUJnQUFBQUFBQUVBQUFDa2dRQUFBQUJtYkdGbkxuUjRkRlZVQlFBRDg0RWRZM1Y0Q3dBQgpCUFVCQUFBRUZBQUFBRkJMQlFZQUFBQUFBUUFCQUU0QUFBQjhBQUFBQUFBPQo

this seems to be a pkzip archive!

After saving this to a file, it seems like there is still a password requirement.

The first thing that caught my eye are the 2 lines below Tom's diary

```
\/\ \\\/ / \/\ /\\ /\ \/\ //\ /\/ /\// //\/ /\// /\/ //\ /\\\ \\/\
\/\ \\\/ / \/\ /\\ /\ \/\ //\ /\/ /\// //\/ /\// /\/ //\ /\\\ \\/\
```

This could be the encoded password. After googling, it seems TomTom code is an actual thing.


```
The Tomtom Code in text form is represented by a forward slash (/) and a backward slash (\). However if your code only consists of 2 characters, it could still be this code if it is obfuscated. To customize the two characters, enter the first one in Key/Alphabet #1 and second one in Key/Alphabet #2 positions. If you have a custom separator between words (besides a space), enter this in the Key/Alphabet #3 position.
```

After decoding it, with an online decoder e.g. https://www.cachesleuth.com/multidecoder/
SLASHESFORPROFIT seems to be the password.

We can now open the file with the password
he2023{sl4sh3s_m4k3_m3_h4ppy}