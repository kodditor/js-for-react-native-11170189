function processArray(numArray){
    const newArr = [];
    for (let i = 0; i < numArray.length; i++ ){
        newArr.push( ( (parseInt(numArray[i]) % 2) === 0 ) ? (numArray[i] ** 2) : (numArray[i] * 3) )
    }
    return newArr;
}

function formatArrayStrings(stringArr, numArr){
    for(let i = 0; i < stringArr.length; i++){
        if(numArr[i] % 2 === 0){
            //stringArr[i] = stringArr[i].toLocaleUpperCase(); // or capitalize? see: https://en.wikipedia.org/wiki/Capitalization
            const tempString = stringArr[i].toLocaleLowerCase()
            stringArr[i] = tempString[0].toLocaleUpperCase() + tempString.substring(1);
        } else {
            stringArr[i] = stringArr[i].toLocaleLowerCase();
        }
    }
    return stringArr;
}