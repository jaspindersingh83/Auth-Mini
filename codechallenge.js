// ____Nov 13____

// function longest (arr) {
//     let long = arr[0]
//     arr.forEach(element => {if (element.length > long.length) {
//         long = element;
//     }
// });
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i].length > long.length) {
//     //         long = arr[i];
//     //     }
//     // }
//     return long;
// }

// console.log(longest(['helloiweeirrhrfjfjdjfn', 'goodbyeifjiorji', 'abc']))

// ____Nov14____

// function evenOccurrence(arr) {
//     let uniquevals = [];
//     for (let i = 0; i<arr.length; i++) {
//         if (!uniquevals.includes(arr[i])) {
//             uniquevals.push(arr[i])
//         } 
//     }
//     return uniquevals;
// }

// const arr = [1, 7, 2, 4, 5,5, 6, 8, 9];
// console.log(evenOccurrence(arr))

// function evenOccurrence(arr) {
//     let count = {};
//     // a place to store the counts/occurrences
//     arr.forEach(function (value) {
//         if (count[value] === undefined) {
//             count[value] = 1;
//         } else {
//             count[value] = count[value] + 1;}
//     });
//     console.log(count)
//     // store each value to count, how to count occurrences
//     // console.log(count)
//     for (let i = 0; i < arr.length; i++) {
//       let now = arr[i];
//       if (count[now] % 2 === 0) {
//         return now;
//       // loop through array to find an even occurrence, return first one, stop loop
//       }
//     }
//     return null;
// }
// const arr = [1, 7, 2, 4,4,4,4,5,5, 6, 8, 9];
// console.log(evenOccurrence(arr))

// -----Nov16------
// function sumOfDigits(n) {
//    if (!Math.floor(n/10)) return n;  
//    return n%10+sumOfDigits(Math.floor(n/10))
//   }

// console.log(sumOfDigits(999))
// ____decompose(n)____


// ----Nov 16-----
// function commonElements(arr1, arr2) {
//     const result = [];
//     arr2.forEach(element => { 
//         if (arr1.includes(element)) result.push(element)     
//     });
//     return result;
//   }


//  arr1 = ['a', 'b', 'c']
//  arr2 = ['x', 'y', 'z', 'a']
//  console.log(commonElements(arr1, arr2))

// function sumiseight(arr) {
//     let obj = {};
//     let pairs =[];
//     arr.forEach(element => {
//         if ((8-element) in obj) {
//              pairs.push(element);
//              pairs.push(8-element);
//         } else {
//             obj[element] = 1;
//         }
//     });
//     return pairs;
// }

// let arr1 = [1,2,3,5];
// console.log(sumiseight(arr1))

// ----finding gcd with O(n)----

// function gcd(n1,n2) {
//     const divisors = {};
//     for (let i = 2; i < n1; i++) {
//         if (n1%i === 0) {
//             divisors[i] = true;   
//         }
//     }
//     for (let i = n2; i > 1; i--) {
//         if (n2%i === 0 && divisors[i]) {
//             return i;
//         }
//     }
//     return null;
// } 

// ----GCD with Euclid's algorithm ---
// function gcd(n1,n2) {
//     let remainder = n1%n2;
//     if (remainder === 0) return n2;
//     else {
//         n1 = n2;
//         n2 = remainder;
//         return gcd(n1,n2)
//     }
//     // while (!(divisor === 0)) {
//     //     let remainder = divident%divisor;
//     //     divident = divisor;
//     //     divisor = remainder;
//     // }
//     // return divident;
// }


// const n1 = 40;
// const n2 = 40;
// console.log(Math.log(n2))
// console.log(gcd(n1,n2))

// ___Binary search on array-----//

// function search(arr,n1) {
//     let middle = Math.ceil((arr.length)/2);
//     if (n1 === arr[middle]) return true;
//     if (n1 < arr[middle] && arr.length > 0) {
//         arr = arr.slice(0,middle);
//         return search(arr,n1);
//     } else if (n1 > arr[middle] && middle > 0) {
//         arr = arr.slice(middle,arr.length);
//         return search(arr,n1);
//     }
//     return false;
// }
// const arr1 = [1,3,5,6,7,10,11,12,34,45,56]
// console.log(search(arr1,12))
// console.log(Math.log(arr1.length))
// ----is prime is a O(sqrt(n))
// function isprime(number) {
//     let sqrtnumber = Math.sqrt(number);
//     for (let i = 2; i < sqrtnumber; i++) {
//         if (!number%i) return false;
//     }
//     return true;
// }

// let n = 7;
// console.log(isprime(n))

// function decompose(n) {
//     for (let i = 0; i <= Math.floor(n/6); i++) {
//         for (let j = 0; j <= Math.floor(n/9); j++) {
//             for (let k = 0; k <= Math.floor(n/17); k++) {
//                 let denominator = (6 * i) + (9 * j) + (17 * k) ;
//                 console.log(denominator)
//                 if (n%denominator === 0) {
//                     return true;
//                 }
//                 }
//             }
//         }
//     return false;
// }

// console.log(decompose(24))
// let string = 'bcar'
// len = string.length
// let min;
// let newstring= '';

// for (let i = string.length-1; i >= 0; i--) {
//     min = string[i];
//     for (let j = 0; j < string.length; j++){
//         if (min > string[j] && i !== j) {
//             min = string[j];
//         } 
//     }
//     newstring=newstring+min;
//     string=string.replace(min,'')
// }
// console.log(newstring)

// function sortString(str) {
//     let min;
//     let newstring= '';
//     for (let i = str.length-1; i >= 0; i--) {
//         min = str[i];
//         for (let j = 0; j < str.length; j++){
//             if (min > str[j] && i !== j) {
//                 min = str[j];
//             } 
//         }
//         newstring=newstring+min;
//         str=str.replace(min,'')
//     }
//         return newstring;
//     }

// let string = 'ksabdus'
// console.log(sortString(string))

// function heapify(arr) {
//     for (let i = 0; i < arr.length/2; i++) {
//         if 
//     }
// }

// function sumAndProduct(sum, product) {
//     let arr = [];
//     for (let i = 0; i < Math.abs(sum) ; i++) {
//         if ( i * (sum-i) === product) {
//             arr.push(i);
//             arr.push(sum-i);
//             break;
//         }
//     }
//     if (arr.length) {
//         return arr;
//     }
//     else {
//         return null;
//     }
// }

// console.log(sumAndProduct(6,9))


// function isArmstrongNumber(n) {
//     if ( n === 0 || n === 1) return true;
//     let string = n.toString();
//     let sum = 0;
//     for (let i = 0; i < string.length; i++) {
//         sum = sum + Math.pow(parseInt(string[i]),string.length);
//     }
//     if (sum === n) return true;
//     return false;
//    }
// function isArmstrongNumber(n) {
//     // because I can
//     // because as slow as I am
//     // I still gots to shine somehow
//     // ya feel me?
    
//     let answer = 0;
//     let disposableN = n;
//     const digitCorral = [];
    
//     while (disposableN > 0) {
//       digitCorral.push(disposableN % 10);
//       disposableN /= 10;
//       console.log(disposableN)
//       disposableN = Math.trunc(disposableN);
//       console.log(disposableN)
//     }
//     for (let i = 0; i < digitCorral.length; i++) {
//       answer += (Math.pow(digitCorral[i], digitCorral.length));
//     }
//     console.log(answer)
//     return (answer === n);
    
//     //why is this not passing all tests?
//   }

// let number = 4;
// console.log(isArmstrongNumber(number));
// ----Code Challenge Dec 4





// function collatzSequence(n) {
//     if (n === 1) return [1];
//     let result = [];
//     if (n%2 === 0) result.push(n/2);
//     else result.push(3*n+1)
//     return [n].concat(collatzSequence(result[result.length-1]));
//   }
// function collatzSequence(n) {
//   const arr = [n];
//   while (n > 1) {
//     if (n % 2 === 0) {
//       arr.push(n/2);
//     } else {
//        arr.push(n * 3 + 1);
//       }
//       n = arr[arr.length-1]
//   }
//   return arr;
//   }
   

// let n1 = 23;
// console.log(collatzSequence(23));

// function nbYear(p0, percent, aug, p) {
//     // your code
//     let count = 0;
//     while(p0 < p) {
//         count++;
//         p0 = p0*(1+percent/100)+ aug;
//     }
//     return count;
// }

// let p0=1000
// let percent = 2;
// let aug = 50;
// let p = 1200;
// console.log(nbYear(p0, percent, aug, p));

// function friend(friends){
//     //your code here
//     return friends.filter((ele)=>{
//         if (ele.length === 4) return ele;
//     })
//   }

// let friends = ["Ryan", "Kieran", "Jason", "Yous"]
// console.log(friend(friends))
// function reverseNumber(n) {
//   let str=String(n);
//   var newstr='';
//   for (let i=str.length-1; i>=0; i--){
//       newstr=newstr+str[i];
//   }
//   return Number(newstr);
//   }
// function nextPalindrome(n) {
//     // if (n === reverseNumber(n)){
//     //     n++; }
//     //     let count = 0;
//     //     while(count === 0) {
//     //         if (n === reverseNumber(n)){
//     //             count++;
//     //         } else {
//     //             n++;
//     //         }
//     //     }
//     // return n
//     n++;
//     if (n === reverseNumber(n) ) {
//         return n;
//     } else {
//         return nextPalindrome(n);
//     }
//   }

// let number = 121;
// console.log(parseInt(131+''))
// // console.log(reverseNumber(number))
// console.log(nextPalindrome(number))
// function returnallvals(obj){
//     let allvalues = Object.values(obj);
//     let flatarray =[];
//     for (let i = 0; i< allvalues.length; i++) {
//         if (typeof allvalues[i] === 'object'){
//             flatarray=flatarray.concat(returnallvals(allvalues[i]));
//         } else {
//             flatarray.push(allvalues[i]);
//         }
//     }
//     return(flatarray) 
// }

// function checkMatchingLeaves(obj) {
//      let all = returnallvals(obj);
//      let reference = all[0];
//      for (let i = 0; i < all.length; i++){
//          if (all[i] !== reference){
//              return false;
//          }
//      }
//      return true;
//     }

// let object = {
//     'a':1,
//     'b':1,
//     'c':{
//         d:1,
//         e:{
//             f:1,
//             g:1
//         }
//     }
// }
// console.log(checkMatchingLeaves(object));

//----Dec 11----//
// function isprime(number){
//     for(let i = 2; i <= Math.sqrt(number); i++) {
//         if (number%i===0 ) return false;
//         }
//     return true;
// }
// function isTwinPrime(n) {
//     if (n<3) return false;
//     else return (isprime(n) && isprime(n+2) || isprime(n) && isprime(n-2) )
//     }

// let n = 2;
// console.log(isTwinPrime(n))

// function order(words) {
//     console.log(words.split(' '))
// }

// let string = 'is2 Thi1s T4est 3a';
// console.log(order(string))

// function vowelCount(str) {
//     let vowels = {'a':1,'e':1,'i':1,'o':1,'u':1};
//     let arr = str.toLowerCase().split('');
//     arr=arr.filter(alpha => vowels[alpha])
//     return arr.length;
//     }
// let string = 'Hello'
// console.log(vowelCount(string));

// function checkString(str1, str2, str3) {
//   let obj1 = {},obj2 = {};
//   str1.split('').forEach((ele,index) => {obj1[ele] = index+1});
//   str2.split('').forEach((ele,index) => {obj2[ele] = index+1});

//   for (let i = 0; i< str3.length; i++) {
//     let ele = str3[i]
//     // console.log(!obj1[ele] && !obj2[ele])
//     if (!obj1[ele] && !obj2[ele]){
//         return false;
//     }
//   }

//   let check1 = str3.split('').filter(ele => obj1[ele]).join('') === str1;
//   let check2 = str3.split('').filter(ele => obj2[ele]).join('') === str2;
//   return (check1 && check2)
//   }
// let string1 = 'abclj'
// let string2 = 'defmpn'
// let string3 = 'dabecflmjpn' 
// console.log(checkString(string1,string2,string3))
// i = 9;

// for (var i = 1; i <= 10; i++) {
// 	!function(n) {setTimeout(function () {
//       console.log(n);
//     }, 100);}(i);
// 
// }


// function romanNumeralize(number) {
//     const key = {
//        M: 1000, 
//       CM:  900, 
//        D:  500, 
//       CD:  400, 
//        C:  100, 
//       XC:   90,
//        L:   50, 
//       XL:   40, 
//        X:   10, 
//       IX:    9, 
//        V:    5, 
//       IV:    4, 
//        I:    1,
//     };
    
//     let returnString = '';
//     for (let entry in key) {
//       while (number >= key[entry]) {
//         returnString += entry;
//         number -= key[entry];
//       }
//     }
//     return returnString;
//   }
// let n = 1990;
// console.log(romanNumeralize(1990))


// function moneyFormat(float) {
//   const twodecimanl = float.toFixed(2); 
//   let numberString = Math.floor(float).toString();
//   let result ='';
//   for (let i = numberString.length-1; i >= 0; i--) {
//     if ((numberString.length-1 - i)%3 === 0 && i!== numberString.length-1 ) {
//       result = result + ' ' + numberString[i];
//     } else {
//       result = result+ numberString[i];
//     }
//   }
//   return (result.split('').reverse().join('')+'.'+twodecimanl.split('.')[1].toString())
// }
// let sample = 12345678.895121;
// console.log(moneyFormat(sample))



// function mergeObjects(arr) {
//  return arr.reduce((newObj,obj) => {
//      Object.keys(obj).map(key => newObj[key] = obj[key]);
//      return newObj
//   },{})
// }

// function mergeObjects(arr) {
//   let newObj = {};
  // Approach 1
  // let newarr = arr.reduce((newObj,obj) => { return {...newObj,...obj}})
  //Approach 2
  // for (let i = 0; i < arr.length; i++){
  //    newObj = {...newObj,...arr[i]}
  // }
  // return(newObj)
  //Approach 3
//   return arr.reduce((newObj,obj) => {
//          Object.keys(obj).map(key => newObj[key] = obj[key]);
//          return newObj
//       },{})
// }


// let arr1 = [
//   {1: '1', 2: '2', 3: '3'},
//   {3: '4', 4: '4', 5: '6'},
//   {5: '5', 6: '6', 7: '7'},
//   ]

// console.log(toSource())


// function expandedNums (num) {
//   //Your code here...
//   let str = '';
//   let numstr = num.toString();
//   for( let i = 0; i < numstr.length; i++){
//     if (numstr[i] !== '0'){
//       str = str + ' + '+ numstr[i] * (Math.pow(10,numstr.length-1-i))
//     }
//   }
//   return str.substr(3,str.length)
// }

// function expandedNums (num) {
//   //Your code here...
//   let arrNum = num.toString().split('');
//   let numLength = arrNum.length;
//   counter = 0;
//   let strRes = '';
//   while (counter < numLength) {
//     let tempNumber = arrNum[counter] * Math.pow(10, (numLength - (counter + 1)));
//     if (tempNumber !== 0)///Add this line here 
//     {
//       console.log(tempNumber)
//       if(counter === 0) {
//         strRes = strRes.concat(tempNumber);
//       } else {
//         strRes = strRes.concat(' + ' + tempNumber);
//       }
//       }
//       ++counter;///Move counter out of if blcok 
//     }
//   return strRes;
// }

// console.log(expandedNums(705));



// function equalSides (arr) {
//   let sum = 0;
//   arr1.forEach(ele => sum = sum + ele);
//   let sumLeft=0;
//   for(let i = 0; i < arr.length; i++){
//     for( let j = 0; j < i; j++){
//       sumLeft = sumLeft+arr[j]
//     }
//     if(sumLeft === sum-arr[i]-sumLeft){
//       return i;
//     }
//     sumLeft = 0;
//   }
//   return -1
//  }

// function equalSides (arr) {
//   let runningTotal = 0;
//   let obj={};
//   let sum = 0;
//   arr.forEach(ele => sum = sum + ele);
//   for(let i = 0; i < arr.length; i++){
//     if(obj[runningTotal]){
//       return i-1;
//     }
//     runningTotal = runningTotal+ arr[i];
//     obj[sum-runningTotal] = 1;
//   }
//   return -1
//  }


//  let arr1 = [1, 2, 3, 4, 3, 2, 1]

//  console.log(equalSides(arr1))



//  function daysBetween (start, end) {
//    let start1 = new Date(start);
//    let end1 = new Date(end);
//    let timeInday = 24*60*60*1000
//    return (`${(end1.getTime()-start1.getTime())/timeInday}`)
// }

// let start ="2014/3/25";

// let end = '2015/3/28'

// console.log(typeof daysBetween(start,end))
// function toCamelCase(str) {
//   let arr = str.split('');
//   let newStr = ''
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] === '-' || arr[i] === '_'){
//       arr[i+1]=arr[i+1].toUpperCase()
//     } else {
//       newStr = newStr + arr[i]
//     }
//   }
//   return newStr
// }

// let string1 = "the-stealth-warrior"
// console.log(toCamelCase(string1))


function longestConsecutive(arr, k) {
  let i = 0; let minLen = 0; let maxStr = '';
  while((i+k) <= arr.length){
    let currentStr = '';
    for(let j = 0; j < k; j++){
      currentStr = currentStr+arr[j+i]
      console.log(currentStr)
    }
    if(currentStr.length>minLen){
      minLen = currentStr.length;
      maxStr = currentStr;
    }
    i++;
  }
  return maxStr;
}

// let list = ["zone", "abigail", "theta", "form", "libe", "zas"]

// console.log(longestConsecutive(list,3))

// function longestConsecutive(arr, k) {
//   let n = arr.length;
//   if (n === 0 || k > n || k <= 0) return "";
//   let largest = arr.reduce(
//     (accumulator, currentValue) => {
      
//       if ( currentValue.length > accumulator.length){
//         accumulator = currentValue;
//       }
//       return accumulator})
//     let marker = arr.indexOf(largest);
//     if(k > 1)
//     return arr.slice(marker, k+1).join('');
    
//     return arr.slice(marker).join('');
// }

// let list = ["zone", "abigail", "theta", "form", "libe", "zas"]

// console.log(longestConsecutive(list,2))

// function toBinaryString(number) {
//   if (number === 0  ) return '0';
//   let remainder; let quotient;
//   let str = ''
//   while(number > 1) {
//     remainder = number%2;
//     quotient = Math.floor(number/2);
//     str = remainder + str;
//     number = quotient;
//   }
//   if (quotient === 1){
//     str = quotient + str
//   }
//   return str;
// }

// function toBinaryString(num, str= ''){
//   if ( num === 0 || num === 1) return  num + str;
//   str = num%2 + str;
//   return toBinaryString(Math.floor(num/2),str)
// }

// let n = 15;
// console.log(toBinaryString(n))

// function largestDifference(arr) {
//   let diff = 0;
//   for(let i = 0; i < arr.length; i++){
//     for(let j = i+1; j < arr.length; j++){
//       if(arr[j]-arr[i]>diff){
//         diff = arr[j]-arr[i]
//       }
//     }
//   }
//   return diff
// }

function largestDifference(arr) {
  let low = arr[0]; //10
  let high = arr[1] - low; //-3
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i]; //10
    let potential = current - low; //10 - 10 = 0
    low = Math.min(current, low); 10 - 0
    high = Math.max(potential, high);//0, -3
  }
  return high;
}

let arr = [10, 7, 5, 8, 11, 9] 
console.log(largestDifference(arr))