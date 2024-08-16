function descendingOrder(num) {
    let newStr = String(num)
    let newArr = newStr.split('');
    let newDec = newArr.sort(function (x, y) { return (y - x) })
    let joinArr = newDec.join("")
    return joinArr
}
console.log(descendingOrder(6743921));