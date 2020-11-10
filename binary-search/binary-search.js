let iterativeLinearSearch = function (arr, x) { 
  for(let i = 0; i < arr.length; i++){ 
    if (arr[i] === x) return true; 
  } 
  return false; 
} 

let iterativeBinarySearch = function (arr, x) { 
   
  let start=0, end=arr.length-1; 
        
  // Iterate while start is less than end 
  while (start <= end){ 

      // Find the middle
      let mid = Math.floor((start + end)/2); 
 
      // If middle equals search value
      if (arr[mid] === x) return true; 

      // Else look in left or right half accordingly 
      else if (arr[mid] < x)  
           start = mid + 1; 
      else
           end = mid - 1; 
  } 
 
  return false; 
} 
 
let recursiveBinarySearch = function (arr, x, start=0, end) { 
  end = end ? end : arr.length-1
  // Base Condition 
  if (start > end) return false; 
 
  // Find the middle 
  let mid = Math.floor((start + end)/2); 
 
  // Compare mid with given key x 
  if (arr[mid] === x) return true; 
        
  // If element at mid is greater than x, 
  // search in the left half of mid 
  if(arr[mid] > x)  
      return recursiveBinarySearch(arr, x, start, mid-1); 
  else
      // If element at mid is smaller than x, 
      // search in the right half of mid 
      return recursiveBinarySearch(arr, x, mid+1, end); 
} 