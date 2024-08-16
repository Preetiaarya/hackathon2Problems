function likes(arr) {
    if (arr.length === 0) {
        return `no one like this`
    } else if (arr.length === 1) {
        return `Swami likes this`
    } else if (arr.length === 2) {
        return `Swami and Sudha like this`
    } else if (arr.length === 3) {
        return `Swami, Sudha and Shiva like this`
    } else if (arr.length === 4) {
        return `Swami, Sudha and 2 others like this`
    }

}
// console.log(arr[0])
console.log(likes([]))                                   //'no one likes this'
console.log(likes(['Swami']))                             //'Swami likes this'
console.log(likes(['Swami', 'Sudha']))                   //'Swami and Sudha like this'
console.log(likes(['Swami', 'Sudha', 'Shiva']))          // 'Swami, Sudha and Shiva like this'
console.log(likes(['Swami', 'Sudha', 'Shiva', 'Shruti'])) // 'Swami, Sudha and 2 others like this'


// let ary =["a", "b", "c", "d"]
// console.log(ary[2])