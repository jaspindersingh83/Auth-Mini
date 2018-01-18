// function Roman2Number(romanChars) {
//     var result = '';
//     var romanObj = { M: 1000,CM:900, D: 500,CD:"400", C: 100, XC:"90" ,L: 50,XL:40, IX:9, X: 10, V: 5, IV:4, I: 1 };
//     var digit=0, len = romanChars.length;
//     for(var i=0;i<romanChars.length;i++){
//          if(romanObj[romanChars[i]+romanChars[i+1]] ){ 
//            digit -= romanObj[romanChars[i]]
//          }else{
//            digit += romanObj[romanChars[i]]
//          }
//     }
//     return digit
//   }

// function Number2Roman(number, str = ''){
//   var romanObj = { M: 1000,CM:900, D: 500,CD:400, C: 100, XC:90 ,L: 50,XL:40,  X: 10,IX:9, V: 5, IV:4, I: 1 };
//   let keys = Object.keys(romanObj);
//   for(let i = 0; i < keys.length; i++){
//     let quotient = Math.floor(number/romanObj[keys[i]])
//     if(quotient >= 1) {
//       number = number-romanObj[keys[i]]
//       str = str + keys[i]
//       if (number === 0){
//         return str;
//       } else {
//         return Number2Roman(number,str)
//       }
//     }
//   }
// }


// let roman = 'IIIIIIIIIIIIIIII';
// console.log(Roman2Number(roman))
// console.log(Number2Roman(16))

// // let number = 1606;
// console.log(roman.length-Number2Roman(Roman2Number(roman)).length)


//The number 512 is interesting because it is equal to the sum of its digits raised to some power: 5 + 1 + 2 = 8, and 83 = 512. Another example of a number with this property is 614656 = 284.

// We shall define an to be the nth term of this sequence and insist that a number must contain at least two digits to have a sum.

// You are given that a2 = 512 and a10 = 614656.

// Find a30.


// let lookup = new Array(1000).fill(-1);

// function digitPowSum(number){
//   let str = number.toString();
//   let sum = 0;
//   str.split('').forEach(ele => {
//     sum = sum + parseInt(ele);
//   })
//   let count = 1;
//   while(Math.pow(sum,count) <= number && count < 64){
//       if (Math.pow(sum,count) === number){
//         return true;
//       } 
//       count++
//   }
//   return false;
// }

// // function digits(){
// //   let result = [];
// //   let n = 11;
// //   while (result.length<12){
// //     if (digitPowSum(n) === true){
// //       result.push(n);
// //     }
// //     n++;
// //   }
// //   return result;
// // }
// // let number = 614656;
// // console.log(digitPowSum(number));
// // console.log(digits())





// // function isPalindrome(number){
// //   let str = number.toString();
// //   for(let i = 0; i < str.length/2; i++){
// //     if (str[i] !== str[str.length-1-i]){
// //       return false;
// //     }
// //   }
// //   return true;
// // }
// // function reverse(number){
// //   let str = number.toString();
// //   let reverse = str.split('').reverse().join('')
// //   return parseInt(reverse)
// // }

// // function isLychrelNumber(number){
// //   let count = 0;
// //   let temp = [];
// //   while(count < 50){
// //       if(isPalindrome(number + reverse(number))){
// //         return 1;
// //       } else {
// //         number = number + reverse(number)
// //       }
// //     count++
// //   }
// //   return -1;
// // }

// // function lessThan(){
// //   let result=[];
// //   let number = 1;
// //   while(number<1000){
// //     if(isLychrelNumber(number) === -1){
// //       result.push(number);
// //     }
// //     number++;
// //   }
// //   return result;
// // }

// // console.log(lessThan())



// function isPrime(number){
//   for(let i = 2; i <= Math.sqrt(number); i++){
//     if(!(number%i)){
//       return false;
//     }
//   }
//   return true;
// }

// let lookup = new Array(10000000).fill(-1)
// function isCircularPrime(number){
//   if (lookup[number-1] === 2){
//     return true;
//   }
//   if (lookup[number-1] === 1){
//     return false;
//   }
//   let flag = true;
//   let str = number.toString();
//   let rotations = []
//   for (let i = 0; i < str.length; i++){
//       str = str.substr(1,str.length-1) + str[0]
//       rotations.push(parseInt(str));
//   }
//   for (let i = 0; i < rotations.length; i++){
//     if (isPrime(rotations[i]) === false){
//      flag = false;
//     }
//   }
//   if(flag){
//     rotations.forEach(ele => {
//       lookup[ele-1]=2;
//     })
//   } else {
//     rotations.forEach(ele => {
//       lookup[ele-1]=1;
//     })
//   }
//   // console.log(number,lookup)
//   return flag;
// }
// function allPrimes(){
//   let result = {};
//   let n = 2;
//   while(n < 10000000 ){
//     if (isCircularPrime(n) === true){
//       result[n] = 1;
//     }
//     n++;
//   }
//   return result;
// }

// console.log(Object.keys(allPrimes()).length)

// function palindromicSubString(str){
//   let flag = 0; 
//   let obj = {};
//   let maxsubstrlen = 0;
//   let currentSubstr = 0;
//   for(let i = 0; i < str.length; i++){
//     if(!flag){
//       if (obj[str[i]] !== undefined && (i- obj[str[i]]) <= 2){
//         flag = 1;
//         currentSubstr = i-obj[str[i]]+1
//       } else {
//         obj[str[i]] = i;
//       }
//     } else {
//       if(obj[str[i]] !== undefined && str[i] === str[i-currentSubstr-1]){
//         currentSubstr = currentSubstr+2;
//       } else{
//         obj[str[i]] = i;
//         flag  = 0;
//         currentSubstr = 0;
//       }
//       maxsubstrlen = Math.max(currentSubstr,maxsubstrlen)
//     }
//   }
//   return maxsubstrlen;
// }
// let str = 'anamicabatrartab'
// console.log(palindromicSubString(str));

// let obj = {
//   'one':1,
//   'two':2,
//   'three':3,
//   'four':4,
//   'five':5,
//   'six':6,
//   'seven':7
// }
// function CardinalNumbers(arr,sort='name'){
//   if(sort !== 'name'){
//   let hash= {}
//   arr.forEach(ele => {
//     let value = obj[ele.split(' ')[1].toLowerCase()];
//     hash[value]= ele
//   })
//   let arr1 = Object.keys(hash).sort();
//   return arr1.map(ele => ele = hash[ele])
//   } else {
//     return arr.sort()
//   }
// }

// let input = ['John Five', 'Alex Six', 'Mary Three', 'Jas Four']
// console.log(CardinalNumbers(input,'value'))

// function minMoves(arr1, arr2, moves = 0){
//     for(let i=0; i < arr1.length; i++){
//         if(arr1[i] !== arr2[i]){
//             let str1 = arr1[i].toString();
//             let str2 = arr2[i].toString();
//             for(let j=0; j < str1.length; j++){
//                 console.log(j)
//                 if(str1[j] !== str2[j]){
//                     moves = moves + Math.abs(parseInt(str1[j])-parseInt(str2[j]))
//                 } 
//             }
//         }
//     }
//     return moves
// }



// let a = [123,4321]
// let m = [234,3214]
// let sum1 = 0;
// a.forEach(ele => sum1=sum1+ele);
// console.log(sum1)
// let sum2 = 0;
// a.forEach(ele => sum2=sum2+ele);
// console.log(sum2)
// console.log(minMoves(a,m))

// function findIndex(arr1,arr2){
    
//     if(arr1.length < arr2.length){
//         let temp = arr1;
//         arr1 = arr2;
//         arr2 = temp;
//     }
//     let ele = arr1.indexOf(arr2[0])
//     console.log(ele)
//     if(ele === undefined){
//         return -1;
//     }
//     for(let i = 0; i < arr2.length; i++){
//         let index = -1;
//         if (arr2[i] !== arr1[ele+i]){
//             return -1;
//         }
//     }
//     return ele
// }

// let arr2 = [1,4,6,5,2,3]
// let arr1 = [2,3]
// console.log(findIndex(arr1,arr2));

let obj = {
    0:'0',
    1:'a',
    2:'t',
    3:'l',
    4:'s',
    5:'i',
    6:'n'
}

function Convert(number){

}

let number = 7;
console.log(Convert )

