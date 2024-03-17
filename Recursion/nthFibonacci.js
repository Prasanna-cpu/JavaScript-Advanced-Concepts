

const nthFibonacci=(n,memo={})=>{
    if(n<=1){
        return n
    }

    if(memo[n]){
        return memo[n]
    }

    return memo[n]=nthFibonacci(n-1,memo)+nthFibonacci(n-2,memo)
}


console.log(nthFibonacci(10))