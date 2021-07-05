const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(str) {
     let arr1 = [];
    for (var i = 0; i < str.length; i += 10) {
        arr1.push(str.slice(i, i + 10));
    }

    let arr2 = new Array(arr1.length);
    for (let i = 0; i < arr1.length; i++) {
        arr2[i] = [];
        for (let j = 0; j < 10; j += 2) {
            arr2[i][j / 2] = arr1[i].slice(j, j + 2)
        }
    }


    let arr3 = []

    for (let i = 0; i < arr2.length; i++) {
        arr3[i] = []
        for (let j = 0; j < arr2[0].length; j++) {
            if (arr2[i][j] == '00') arr3[i].push('');
            if (arr2[i][j] == '10') arr3[i].push('.');
            if (arr2[i][j] == '11') arr3[i].push('-');
            if (arr2[i][j] == '**') arr3[i].push(' ');
        }
        arr3[i] = arr3[i].join('');
        if (arr3[i] == '     ') arr3[i] = ' ';
        else arr3[i] = MORSE_TABLE[arr3[i]];
    }
   

    return arr3.join('')
}

module.exports = {
    decode
}
