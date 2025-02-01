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
//     }
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

// Example:
 
// Input: [3, 3, 4, 2, 4, 4, 2, 4, 4]

