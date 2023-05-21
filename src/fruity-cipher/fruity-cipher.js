import { findTenLetterWordOptions} from './find-valid-10-letter-words.js';

const cipher = '🥦🥝🍋🍊🥭🍌🫑🧅 🧅🥝🥖 🍉🍠🥬🫐 🍉🫐🥔🥥🍈 🥔🍌🥝🥖🍏 🥐🍍🥦🍉🍇🥥🍋 🥑🍉🍍🥐🍉 🍅🍠🥦 🍋🥭🍓🍐🌶🍇 🥕🌶🥔🥭🍓🍏🍒🍆🍏 🌶🫐🍎🍏🍒🥥🍊 🍎🥝 🍅🥝🥥🍇 🍎🍉🥔🍓 🥝🍓🍇 🥐🥭🥦🍉🍇🥥🍏🫐🍆🍎 🌶🫐🍎🍏🍇🥥🍋 🍎🍉🍇🍊🫐 🍠🥥🍒 🥐🍠🌶🫑🫐🍈 🍉🥝🍅🥝🥦🍉🥝🍓🍍🥐 🥐🍍🥕🍉🫐🥥🍋 🍏🍉🍇 🍋🥝🫑🥖🍏🍍🥝🍓 🥭🍋 🍉🧅🥦🍒🥥🥬🥭🍏🍠🍅🥭🍓🥝🍋🥭🍊';

const dict = {}
for (let char of cipher) {
    const mappedChar = char === '🍏' ? '🍎': char;

    if (mappedChar in dict) {
        dict[mappedChar] += 1;
    } else {
        dict[mappedChar] = 1;
    }
}

function splitOnSpaces(value) {
    return value.split(' ')
}

function replaceInString(stringArray, replacer) {
    return stringArray.map((s) => {
        let transformed = s;
        Object.entries(replacer).forEach(([key, value]) => {
            transformed = transformed.replace(new RegExp(key, 'g'), value);
        });
        return transformed;
    });
}

const value = splitOnSpaces(cipher);
const knownUnique = replaceInString(value, { '🍎': '🍏' });
// const twoLetterWords = knownUnique.filter(s => s.length === 4);
// const threeLetterWords = knownUnique.filter(s => s.length === 6);
// const fourLetterWords = knownUnique.filter(s => s.length === 8)

const word10 = '🍉🥝🍅🥝🥦🍉🥝🍓🍍🥐';
const options10 = findTenLetterWordOptions();

function buildReplacer(value, guess) {
    const replacer = [...value].reduce((acc, letter, index) => {
        acc[letter] = guess[index];
        return acc;
    }, {})

    console.log({ guess, replacer });
    return replacer;
}


// console.log(options10)
// options10.forEach((option) => {
//     const replacer = buildReplacer(word10, option);
//     const attempt = replaceInString(knownUnique, replacer);
//     console.log(attempt)
// });

// we choose homophonic to continue
const option10 = 'homophonic';
const replacer = buildReplacer(word10, option10);
const attempt10 = replaceInString(knownUnique, replacer);
console.log(attempt10)

// [
// 'po🍋🍊🥭🍌🫑🧅',
//   '🧅o🥖',
//   'h🍠🥬🫐',
//   'h🫐🥔🥥🍈',
//   '🥔🍌o🥖🍏',
//   'ciph🍇🥥🍋',
//   '🥑hich',
//   'm🍠p',
//   '🍋🥭n🍐🌶🍇',
//   '🥕🌶🥔🥭n🍏🍒🍆🍏',
//   '🌶🫐🍏🍏🍒🥥🍊',
//   '🍏o',
//   'mo🥥🍇',
//   '🍏h🥔n',
//   'on🍇',
//   'c🥭ph🍇🥥🍏🫐🍆🍏',
//   '🌶🫐🍏🍏🍇🥥🍋',
//   '🍏h🍇🍊🫐',
//   '🍠🥥🍒',
//   'c🍠🌶🫑🫐🍈',
//   'homophonic',
//   'ci🥕h🫐🥥🍋',
//   '🍏h🍇',
//   '🍋o🫑🥖🍏ion',
//   '🥭🍋',
//   'h🧅p🍒🥥🥬🥭🍏🍠m🥭no🍋🥭🍊'
// ]


// we guess that c🥭ph🍇🥥🍏🫐🍆🍏 === ciphertext
const optionCph = 'ciphertext';
const replacerCph = buildReplacer('c🥭ph🍇🥥🍏🫐🍆🍏', optionCph);
const attemptCph = replaceInString(attempt10, replacerCph);

console.log(attemptCph)
// [
// 'po🍋🍊i🍌🫑🧅', '🧅o🥖',
//   'h🍠🥬e',        'he🥔r🍈',
//   '🥔🍌o🥖t',      'cipher🍋',
//   '🥑hich',        'm🍠p',
//   '🍋in🍐🌶e',      '🥕🌶🥔int🍒xt',
//   '🌶ett🍒r🍊',     'to',
//   'more',          'th🥔n',
//   'one',           'ciphertext',
//   '🌶etter🍋',      'the🍊e',
//   '🍠r🍒',         'c🍠🌶🫑e🍈',
//   'homophonic',    'ci🥕her🍋',
//   'the',           '🍋o🫑🥖tion',
//   'i🍋',           'h🧅p🍒r🥬it🍠mino🍋i🍊'
// ]



// we guess that 🌶ett🍒r🍊 === letters
const optionEttr = 'letters';
const replacerEttr = buildReplacer('🌶ett🍒r🍊', optionEttr);
const attemptEttr = replaceInString(attemptCph, replacerEttr);

console.log(attemptEttr)

// [
//   'po🍋si🍌🫑🧅', '🧅o🥖',
//   'h🍠🥬e',       'he🥔r🍈',
//   '🥔🍌o🥖t',     'cipher🍋',
//   '🥑hich',       'm🍠p',
//   '🍋in🍐le',     '🥕l🥔intext',
//   'letters',      'to',
//   'more',         'th🥔n',
//   'one',          'ciphertext',
//   'letter🍋',     'these',
//   '🍠re',         'c🍠l🫑e🍈',
//   'homophonic',   'ci🥕her🍋',
//   'the',          '🍋o🫑🥖tion',
//   'i🍋',          'h🧅per🥬it🍠mino🍋is'
// ]

console.log(replaceInString(attemptEttr, { '🍋': 's', '🍐': 'g', '🥑': 'w', '🫑': 'l', '🥖': 'u', '🥕': 'p', '🍌': 'b', '🥔': 'a', '🧅': 'y', '🍠': 'a', '🥬': 'v', '🍈': 'd' }).join(' '))
