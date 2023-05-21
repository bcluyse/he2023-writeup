All flags consist out of 4 parts.
While checking occurrences, there seem to be quite a lot of duplicate flags.
Let's filter those out first.

```
cat singular.txt | sort | uniq -u > singular-unique.txt
```

Then I tried to find flags which had unique words in them
```
cat singular-unique.txt | sed s/he2023\{// | sed s/\}// | sed s/\_/\ /g | tr " " "\n" | sort | uniq -u
```

This ended up giving quite a lot of unique words, so I did not continue on this approach.

Next, I wanted to look at unique length

```
function find_length() {  
while IFS= read -r line; do  
echo ${#line}
done < singular-unique.txt  
}  
  
find_length | sort | uniq -u
```

The only output here is 33, so that means there is only one flag with length 33.
So I ran the script again with outputting the lines and found the flag.

he2023{security_first_easy_catch}