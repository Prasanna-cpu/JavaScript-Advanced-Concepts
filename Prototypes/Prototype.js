const person={
    alive:true
}

const musician={
    plays:true
}

Object.setPrototypeOf(musician,person)

console.log(musician.alive)

const guitarist={
    strings:8,
    __proto__:musician
}


console.log(Object.getPrototypeOf(guitarist)===musician)
console.log(`Is the guitarist alive :${guitarist.alive}`)
console.log(`No of strings for the guitarist :${guitarist.strings}`)
console.log(`Is the guitarist playing :${guitarist.plays}`)
console.log(guitarist)
