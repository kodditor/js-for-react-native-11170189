
import { formatArrayStrings, processArray } from './arrayManipulation.js'

function createUserProfiles(names, modifiedNames){
    const objs = []
    for (let i = 0; i < names.length; i++){
        objs.push({
            id: i + 1,
            originalName: names[i],
            modifiedName: modifiedNames[i],
        })
    }
    return objs;
}

(function start(){
    const nums = [1,2,3,4,5];
    const processedNums = processArray(nums);
    const names = ['kwaku Ofosu', 'AMA Takyi', 'KwaSi BoAkye', 'Theo Obeng', 'Jessica Narh'];
    const modifiedNames = formatArrayStrings(names, processedNums);
    const profiles = createUserProfiles(names, modifiedNames);
    console.log(profiles)
})()