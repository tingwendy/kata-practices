We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)

solution:
1. create empty Array
2. split Array
3. loop through the array 
4. use regex test to find match
5. push the matches and position into empty array
6. remember to add 1 because this index starts at 1, so position 0 is actually 0+1=1.

function vowelIndices(word){
    //your code here
    let arr=[];
    let x=word.split('');
    for(let i=0; i<word.length; i++){
      if (/[aeiouy]/gi.test(x[i])) 
        {arr.push(i+1)}
    }
    return arr;
  }

  alternatively:
  function vowelIndices(word){
    let res = []
    
    for (let i = 0; i < word.length; i++) { 
      if ('aiuoeyAIUOEY'.includes(word[i])) {
         res.push(i+1)
      }
      }
    
  return res
  }