code = "";

var audioDelete = new Audio("delete.mp3");
audioDelete.load();
var audioClick = new Audio("click.wav");
audioClick.load();
var audioSuccess = new Audio("success.mp3");
audioSuccess.load();
var audioFail = new Audio("fail.mp3");
audioFail.load();

wasmMemory = null;
wasmCheck = null;

function checkWASM(code) {
    const pinArray = new Int32Array(wasmMemory.buffer, 0, 26);
    encode(code, pinArray);
    wasmCheck(pinArray.byteOffset, pinArray.length);
    return decode(pinArray);
}

function play(file) {
    a = new Audio(file);    
    a.play();
}

const encode = function stringToIntegerArray(string, array) {
    for (let i = 0; i < string.length; i++) {
        array[i] = string[i].charCodeAt(0);
    }
};

const decode = function integerArrayToString(array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
        string += String.fromCharCode(array[i]);
    }
    return string;
};

function sleep(ms) {
    return new Promise((res) => setTimeout(res, ms));
}

async function runBruteForce() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            for (let k = 0; k < 10; k++) {
                for (let l = 0; l < 10; l++) {
                    for (let m = 0; m < 10; m++) {
                        for (let n = 0; n < 10; n++) {
                            for (let o = 0; o < 10; o++) {
                                for (let p = 0; p < 10; p++) {
                                    const code = `${i}${j}${k}${l}${m}${n}${o}${p}`;
                                    const msg = checkWASM(code);
                                    if (msg.startsWith("he2023")) {
                                        console.log('===> Brute forced', { msg, code });
                                    } else {
                                        // console.log('Failed attempt with', code)
                                    }
                                }
                            }
                        }
                    }
                }
            }
            console.log(`${i}${j}000000`);
        }
    }
}

$(document).ready(function () {
    (async () => {
        const response = await fetch("http://localhost:4000/check.wasm");
        const file = await response.arrayBuffer();
        const wasm = await WebAssembly.instantiate(file);
        const {memory, check} = wasm.instance.exports;
        wasmMemory = memory;
        wasmCheck = check;

        setTimeout(() => {
            runBruteForce()
        }, 2000);
    })();
})