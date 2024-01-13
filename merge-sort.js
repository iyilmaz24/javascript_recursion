
// input: [3, 2, 1, 13, 8, 5, 0, 1] 
    // should return [0, 1, 1, 2, 3, 5, 8, 13]

// input: [105, 79, 100, 110] 
    // should return [79, 100, 105, 110]

let input1 = [3, 2, 1, 13, 8, 5, 0, 1]; 
let input2 = [105, 79, 100, 110]; 

function mergeSort(outputArray){
    
    if(outputArray.length <= 1){
        return outputArray;
    }

    let mid = Math.floor(outputArray.length / 2);
    let left = mergeSort(outputArray.slice(0, mid))
    let right = mergeSort(outputArray.slice(mid))
    return merge(left, right)
}

function merge(left, right) {
    localArray = []

    currL = 0;
    currR = 0;
    while(currL < left.length && currR < right.length){
        if(left[currL] <= right[currR]) {
            localArray.push(left[currL])
            currL += 1;
        }
        else {
            localArray.push(right[currR])
            currR += 1;
        }
    }

    while(currL < left.length){
        localArray.push(left[currL]);
        currL += 1;
    }

    while(currR < right.length){
        localArray.push(right[currR]);
        currR += 1;
    }

    return localArray;
}


const result1 = mergeSort(input1);
const result2 = mergeSort(input2);

console.log(result1, result2);