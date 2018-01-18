// function fibonacci(n){
//     if (n<2){
//         return n
//     } 
//     return fibonacci(n-1)+fibonacci(n-2)
// }

// console.log(fibonacci(40))


// function fibonacci(n,lookup=[]){
//     if(lookup[n] === undefined){
//         if ( n <= 1){
//             lookup[n] = n ;
//         } else {
//             lookup[n] = fibonacci(n-1,lookup) +fibonacci(n-2,lookup);
//         }
//     }
//     return lookup[n]
// }

function fibonacci(number) {
    if (number<2){
        return number;
    }
    return (fibonacci(number-1)+ fibonacci(number-2))
}

console.log(fibonacci(100))
