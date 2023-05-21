Connect to the server, snoop around, and find the flag!

-   `ssh ch.hackyeaster.com -p 2306 -l blinky`
-   password is: `blinkblink`

After connecting we seem stuck and cannot execute any command. After running `alias` , we see that most commands have been aliased to sandbox the user.

`unalias -a` gives us access to basic tools like cat and cd.

`cat flag.txt` gives

```
dont try
 - brute force
 - wordlists
```

cat `about.txt` gives
```
Blinky, ankaŭ konata kiel Akabei, estas la gvidanto de la Fantomoj kaj la ĉefmalamiko de Pac-Man. Li ankaŭ estas prezentita kiel la plej agresema fantomo kiu ĉiam postkuras Pac-Man, kaj malfacilas skui post kiam li komencas. Li povas havi humoron, kaj estas bonaj amikoj kun Pinky, Inky, kaj Clyde. Li ankaŭ havas filinon nomitan Yum-Yum.

Dum origine la ĉefantagonisto en la unua Pac-Man arkadludo, lia antagonisma rolo de la franĉizo estis plejparte malpliigita al aliancano en lastatempaj enkarniĝoj, kvankam li daŭre estas konsiderita la serio-fakta ĉefa antagonisto en refilmigoj de la unua matĉo kaj de pli maljunaj adorantoj.
```

This text is Esperanto and just seems to give some indication as to who Blinky is.

```
Blinky, also known as Akabei, is the leader of the Ghosts and Pac-Man's archenemy. He is also depicted as the most aggressive ghost who always chases Pac-Man, and is hard to shake once he starts. He can have a temper, and is good friends with Pinky, Inky, and Clyde. He also has a daughter named Yum-Yum.

While originally the main antagonist in the first Pac-Man arcade game, his antagonistic role of the franchise has been largely diminished to an ally in recent incarnations, although he is still considered the series-de facto main antagonist in remakes of the first game and by older fans.
```

In /home/blinky/ there is an encrypted zipfile called blinkyflag.fzip but there does not seem to be a straightforward password like yum-yum.

However, if you look at the initial output of alias
```
alias ash='exit'
alias bash='echo "you are not a bash brother" && exit'
alias cat='echo "|\---/|" && echo "| o_o |  meow!" && echo " \___/" #'
alias cd='/bin/true'
alias egrep='echo "" #'
alias fgrep='echo "" #'
alias find='echo "command not found: find" #'
alias fzip='/usr/bin/zip -P "/bin/funzip"'
alias grep='echo "" #'
alias id='echo "uid=0(root) gid=0(root) groups=0(root)"'
alias java='echo "command not found: java" #'
alias less='echo "|\---/|" && echo "| o_o |  meow!" && echo " \___/" #'
alias ls='/bin/ls /home/blinky | /bin/grep -v home #'
alias more='echo "|\---/|" && echo "| o_o |  meow!" && echo " \___/" #'
alias pwd='echo /home/blinky #'
alias python='echo "command not found: python" #'
alias sh='echo "one does not simply sh into Mordor" && exit'
alias vi='echo "command not found: vi" #'
alias vim='echo "command not found: vim" #'
alias whoami='echo "you are you"'
alias zip='echo "command not found: zip" #'
alias zsh='exit'
```

We see that there is an aliased command called fzip.
This seems to use -P "/bin/funzip" and -P seems to match the password field.

If we try to unzip, we find the flag
```
502f9cc0c247:~/home/blinky$ unzip -p blinkyflag.fzip | more
[blinkyflag.fzip] flag.txt password: 
he2023{al1asses-4-fUn-and-pr0fit}
```