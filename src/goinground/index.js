import fetch from 'node-fetch';

async function iterate (key) {
  const result = await fetch(`http://ch.hackyeaster.com:2305/encrypt?s=${key}`, {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "en-GB,en;q=0.9,nl-BE;q=0.8,nl;q=0.7,en-US;q=0.6",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "upgrade-insecure-requests": "1",
      "Referer": "http://ch.hackyeaster.com:2305/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  });
  

  const html = await result.text();
  const matches = html.match(/\<h2\>(.*)\<\/h2\>/);
  console.log(matches[1])
  return matches[1];
}

let boom = false;
let iteration = 'ip0232j{1t_x_v0z4b3bm__v4xvq}a';
while(!boom) {
  iteration = await iterate(iteration);

  console.log('XXX', iteration);

  if (iteration.startsWith('he2023')) {
    boom = true;
  }
}

console.log('Result is', iteration);