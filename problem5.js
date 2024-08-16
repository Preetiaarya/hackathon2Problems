function getMiddle(str) {
        let length = str.length
    if (str.length % 2 !== 0) {
        let middleNum = Math.floor(length / 2)
        console.log(str[middleNum])
    }
    else {
        let length = str.length
        let middleNum = str.length / 2
        let output = str[middleNum - 1] + str[middleNum]
        console.log(output)
    }
}
getMiddle("aarya"); 
getMiddle("preeti");