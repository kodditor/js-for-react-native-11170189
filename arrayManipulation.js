function processArray(numArray){
    const newArr = [];
    for (let i = 0; i < numArray.length; i++ ){
        newArr.push( ( (parseInt(numArray[i]) % 2) === 0 ) ? (numArray[i] ** 2) : (numArray[i] * 3) )
    }
    return newArr;
}