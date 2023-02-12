//Push Front

// function pushFront(arr, x){
//     for(let i = arr.length; i >= 0; i--){ // we will start at the end of the list and reverse through it 
//         arr[i] = arr[i - 1] // while reversing, we will replace the value in front with our current pos
//     }
//     arr[0] = x;
//     return arr
// }

// console.log(pushFront([5,7,2,3],8))

//Pop Front

// function popFront(arr){
//     temp = arr[0]; // save the first val
//     for(let i = 0; i < arr.length; i++){ //loop while shifting to the left 
//         arr[i] = arr[i + 1] //our current val is going to be equal to the next value in line
//     }
    
//     arr.length = arr.length - 1 // decrease the length of the array by 1

//     console.log(arr) // within our function go ahead and console log the array
//     return temp
// }

// console.log(popFront([0,5,10,15]))

//Insert at

function insertAt(arr,index,val) {
    for(let i = arr.length; i >= index; i--) { // shift our values going to the right
        arr[i] = arr[i - 1] 
    }
    arr[index] = val // set our indexes point to the value we have set
    return arr 
}

console.log(insertAt([100,200,5], 2, 311))