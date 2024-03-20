


//Impure functions

const addToScoreHistory=(arr,score)=>{
    arr.push(score)
    return arr
}

const score=[90,24,78,99,100]
console.log(addToScoreHistory(score,100))


//Pure function


//Shallow copy

arr1=[1,2,3,4]
arr2=[...arr1,5]

console.log(arr1)
console.log(arr2)


const arr3=Object.assign([],arr1)

console.log(arr3)


