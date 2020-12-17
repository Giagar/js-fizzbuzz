// versione 1
// creare num da 1 a 100
for (var i = 1; i <= 100; i++) {
    // se divisibili per entrambi, stampa FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    // se divisibili per 3, stampa Buzz
    } else if (i % 3 === 0){
        console.log('Fizz');
    // se divisibili per 5, stampa Fizz
    } else if (i % 5 === 0) {
        console.log('Buzz')
    // altrimenti stampa il numero stesso
    } else {
        console.log(i)
    }
}

// // versione 2
// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz')
//     } else {
//         if (i % 3 === 0) {
//             console.log('Fizz');
//         } else if (i % 5 === 0) {
//             console.log('Buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }

// versione 3: html
var result = "";

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
       result += '<li>FizzBuzz</li>';
    } else {
        if (i % 3 === 0) {
            result += '<li>Fizz</li>';
        } else if (i % 5 === 0) {
            result += '<li>Buzz</li>';
        } else {
            result += '<li>' + i + '</li>';
        }
    }
}

document.querySelector("#list").innerHTML = result;