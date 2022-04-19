Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.

Solution:

function unusedDigits(...array) {
    let digits=array.join()
    return [0,1,2,3,4,5,6,7,8,9]
      .filter(x=> !digits.includes(x))
      .join('');
  }

  1. create a variable digits 
  2. used spread operater to define parameter
  3. filter out whatever is not present in arguments
  4. join back together