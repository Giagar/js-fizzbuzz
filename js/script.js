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
