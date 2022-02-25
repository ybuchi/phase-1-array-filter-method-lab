// Code your solution here
function findMatching(arr, name){
    //returns all matching names in the arr
    //if name matches any element in the arry, push the matching names into a new array
    let newArray = arr.filter(
        //This cb function should search for all element that match name
        arr => arr.toLowerCase() === name.toLowerCase()
    )
    return newArray;
};

function fuzzyMatch(arr, name){
    let newArray = arr.filter(
        arr => arr.toLowerCase().startsWith(name.toLowerCase()) === true
    )
    return newArray;
};
 
function matchName(arr, name){
    let newArray = arr.filter(
        arr => arr.name === name
    )
    return newArray;
};


