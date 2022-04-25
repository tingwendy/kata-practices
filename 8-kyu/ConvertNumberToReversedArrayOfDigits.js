Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]

solution: 
function digitize(n) {
    return String(n)
     .split('')
     .reverse()
     .map(x=> Number(x))
   }

1. this is an array
2. make it a string and then split the string
3. reverse the string
4. use map to return a new array out of the string. 

alternate one liner:

function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }