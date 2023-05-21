🥦🥝🍋🍊🥭🍌🫑🧅 🧅🥝🥖 🍉🍠🥬🫐 🍉🫐🥔🥥🍈 🥔🍌🥝🥖🍏 🥐🍍🥦🍉🍇🥥🍋 🥑🍉🍍🥐🍉 🍅🍠🥦 🍋🥭🍓🍐🌶🍇 🥕🌶🥔🥭🍓🍏🍒🍆🍏 🌶🫐🍎🍏🍒🥥🍊 🍎🥝 🍅🥝🥥🍇 🍎🍉🥔🍓 🥝🍓🍇 🥐🥭🥦🍉🍇🥥🍏🫐🍆🍎 🌶🫐🍎🍏🍇🥥🍋 🍎🍉🍇🍊🫐 🍠🥥🍒 🥐🍠🌶🫑🫐🍈 🍉🥝🍅🥝🥦🍉🥝🍓🍍🥐 🥐🍍🥕🍉🫐🥥🍋 🍏🍉🍇 🍋🥝🫑🥖🍏🍍🥝🍓 🥭🍋 🍉🧅🥦🍒🥥🥬🥭🍏🍠🍅🥭🍓🥝🍋🥭🍊

- The cipher seems to be a single character cipher since there are words consisting out of 3 and 8 characters.
- There are 30 different characters
- We do already know there are duplicates like -   🍏 == 🍎
- Occurrence of characters: 
	-  '🥦': 6
	-  '🥝': 12
	- '🍋': 8
	- '🍊': 4
	- '🥭': 8
	- '🍌': 2
	- '🫑': 3
	- '🧅': 3
	- ' ': 25 
	- '🥖': 3
	- '🍉': 13
	- '🍠': 5
	- '🥬': 2
	- '🫐': 8
	- '🥔': 4
	- '🥥': 9
	- '🍈': 2
	- '🍎': 15
	- '🥐': 6
	- '🍍': 5
	- '🍇': 8
	- '🥑': 1
	- '🍅': 4
	- '🍓': 7
	- '🍐': 1
	- '🌶': 5
	- '🥕': 2
	- '🍒': 4
	- '🍆': 2

Eventually I found that there was 1 10 letter word which had 3 occurrences of 1 letter and 2 occurrences of another. That sounded reasonably unique to me, so I downloaded a word list and tried to find matching words. That ended up in 26 solutions.
These could be filtered relatively easy since there were some letter combinations which did not work.

From there onwards, I kept on finding matches to certain words and keep on making educated guesses on which the most wise options were.

After doing this multiple times, the sentence started making more and more sense until I could manually decode the rest. The approach taken can be found in the source folder.

```
possibly you have heard about ciphers which map single plaintext letters to more than one ciphertext letters these are called homophonic ciphers the solution is hypervitaminosis
```

he2023{hypervitaminosis}