// function removeBlanks(string) {
//     //make a new string initialized to a blank string
//     let newString = ''
//     for(let i = 0; i < string.length; i++){
//         if(string[i] != ' ') {// if current char is not a space
//             newString += string[i]//concat w new string
//         }
            
//     }
//     return newString//return new string
// }

// console.log(removeBlanks("Pl ayTha tF u nkyM usi c"))// test with a console log


// function getDigits(string) {
//     let newString = '' //set a new string to empty
//     for(let char in string){// for every char in our string
//         if(!isNaN(string[char])) {// if our char in the string is a number
//             newString += string[char] //concat the current string to the newString
//         }
//     }
//     return Number(newString)// return it after looping
// }

// console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))

// function acronym(string) {
//     let wordsArr = string.split(' ')
//     let acronymString = ''
    
//     for(let word in wordsArr) { // loop for every word in the string
//         if(wordsArr[word].length > 0) { //if our words length is > 0
//             acronymString += wordsArr[word][0].toUpperCase()//grab the first letter of the word and console.log
//         }
//     }
//     return acronymString
// }

// console.log(acronym(" there's no free lunch - gotta pay yer way. "))

// function countNonSpaces(string) {
//     let charCount = 0

//     for(let char in string){// for every character in our string
//         if(string[char] != ' ')// if is not a space
//         charCount += 1// add one to charCount
//     }
//     return charCount
// }

// console.log(countNonSpaces("Honey pie, you are driving me crazy"))


function removeShorterStrings(array, len) {
    let newArray = []//array creation
    let nextIndex = 0

    for(let value in array ){

        if(array[value].length >= len) {
            newArray[nextIndex++] = array[value]
        }
        
    }
    return newArray
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))