(function IIFE(){
    num++
    console.log(num)
    return num!==5 ?IIFE(num) :console.log("finished")
})(num=0)