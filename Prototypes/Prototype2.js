const car={
    doors:4,
    seats:'vinyl',
    get seatMaterial(){
        return this.seats
    },

    set seatMaterial(material){
        this.seats=material
    },

    get doorCount(){
        return this.doors;
    },

    set doorCount(count){
        this.doors=count
    }


}

const luxuryCar={}
Object.setPrototypeOf(luxuryCar,car)
luxuryCar.seatMaterial='leather'
console.log(luxuryCar)

luxuryCar.doors=2
console.log(car.doors)

console.log(Object.keys(luxuryCar))


Object.keys(luxuryCar).forEach(key=>{
    console.log(key)
})

for(let key in luxuryCar){
    console.log(key)
}