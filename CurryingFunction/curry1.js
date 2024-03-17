

const buildSandwitch=(ingredient)=>{
    return (ingredient2)=>{
        return (ingredient3)=>{
            return `${ingredient} , ${ingredient2} , ${ingredient3}`
        }
    }
}


const mySandwitch=buildSandwitch("Bread")("Vegetables")("Sauce")
console.log(mySandwitch)



const buildApplication=frontend=>backend=>API=>`${frontend}, ${backend}, ${API}`;

const app=buildApplication("react")("nodejs")("rest")

console.log(app)


const curriedMultiply=x=>y=>x*y

console.log(curriedMultiply(5)(7))