
target = 8;
// print numbers leading up to target number in fibonacci sequence 
    // target output [0, 1, 1, 2, 3, 5, 8, 13]

let output = [0, 1]
function fibsRecursive(currNum) {
    if (currNum == target) {
        return;
    }
    while (currNum != target - 2) {

        output[currNum + 2] = output[currNum] + output[currNum + 1]

        return fibsRecursive(currNum + 1)
    }
}
fibsRecursive(0)
console.log(output)


target2 = 8
// print given target number in the fibonacci sequence
    // target output [0, 1, 1, 2, 3, 5, 8, 13] -> 8 + 13 = 21
        // 21 is the 8th number in the fibonnaci sequence

let output2 = false;
function fibsRecursive2(num) {

    if(num < 2){
        return num
    }
    return fibsRecursive2(num - 2) + fibsRecursive2(num - 1)

}
output2 = fibsRecursive2(8);
console.log(output2)
