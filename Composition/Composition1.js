const prepare=()=>{
    return {
        prepare: ()=>console.log("prepare")
    }
}

const bake=()=>{
    return {
        bake:()=>console.log("bake")
    }
}

const toss=()=>{
    return {
        toss: ()=>console.log("toss")
    }
}



const ready=()=>{
    return {
        ready: ()=>console.log("ready")
    }
}


const stuff=()=>{
    return {
        stuff(){
            console.log("Stuffing the crust");
        }
    }
}


const butter=()=>{
    return{
        butter(){
            console.log("Buttering the crust");
        }
    }
}


const createPizza=(size,crust,sauce)=>{
    const pizza={
        size:size,
        crust:crust,
        sauce:sauce,
        toppings:[]
    }

    return{
       ...pizza,
       ...prepare(),
       ...bake(),
       ...toss(),
       ...stuff(),
       ...butter(),
       ...ready()
    }
}
