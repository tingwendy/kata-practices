Simple, remove the spaces from the string, then return the resultant string.

solution:
function noSpace(x){
    return x.replace(/\s/g, '');
    }

solution 2:
function noSpace(x){
    return x.replace(/ /g, '');
}