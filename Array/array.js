// // FIND DUBLICATE NUMBER 1ST APPROACH
// // Time Complexity = O(n)
// // space Complexity = O(n)
// function  findDuplicate(nums){
//     let set = new Set ()
    
//     for( const num of nums){
//         if(set.has(num)){
//             return num;
//         }else{
//             set.add(num)
//         }
//     return -1;
// }

// // Example usage
// const nums = [3, 1, 3, 4, 2];
// console.log(findDuplicate(nums)); // Output: 3

// // function finddublicate(nums){
// //   let newArr = nums.sort()
// //    for (var i = 0; i < newArr.length; i++) {
// //          if(newArr[i]!=i+1){
// //            return newArr[i]
           
// //          }
// //    }
  
// // }


// 13. Find the Majority Element           
// Problem Statement: Given an array, find the element that appears more than n/2 times in the array (if it exists).

//     }
// Example:
 
// Input: [3, 3, 4, 2, 4, 4, 2, 4, 4]
// Input= [3, 3, 4, 2, 4, 4, 2, 4, 4]
 
// function majorityElem(Input){
         
//          let candiates =null;
//          let count = 0;
//          for(let nums of Input){
//             if (count==0) {
//                candiates=nums
//                count=1;
//             }
//             else if (candiates == nums){
//               count++
//             }else{
//               count--;
//             }
              
//             }
            
//             let freq = 0
//             for(let nums of Input){
//               if (candiates == nums) {
//                   freq++;
//               }
//             }
//             if(freq>Input.length/2){
//               return candiates;
//             }else{
//               return null;
//             }
           
//          }
      
   
    


// const major = majorityElem(Input);
// console.log(major)

//remove dublicate from array

// Input= [1, 2, 3, 4, 5,5]
 
// function remove(Input){
  
//    const uniqueMap = new Map();
    
//    for(let nums of Input){
//      uniqueMap.set(nums , true)
//    }
//    return Array.from(uniqueMap.keys());

// }   
// const major = remove(Input);
// console.log(major)


// reverse  words of array ;
// Input= ["Danish" , "Amir"]
 
// function reverseword(Input){
      
//      let reversewods = []
//      for(let i =0;i<Input.length;i++){
//           let words=  Input[i]
//           //console.log(words.charAt(0))
          
//           //const reverseword = words.split('').reverse().join('')
//           // const captilizedReverse = reverseword.charAt(0).toUpperCase()+reverseword.slice(1).toLowerCase()  
//             // reversewods.push(captilizedReverse)
          
//           let Reversestring = ''
//           for (let j = words.length - 1; j >= 0; j--) {
//       Reversestring += words[j];
//     }
//           console.log(Reversestring)
          
//           const captilizedReverse =Reversestring.charAt(0).toUpperCase() +Reversestring.slice(1).toLowerCase()
//          console.log(captilizedReverse)
//           reversewods.push(captilizedReverse)
          
          
//      }
//      return reversewods
//     }
// const major = reverseword(Input);
// console.log(major)
