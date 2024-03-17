

const Fib = (num, array = [0, 1]) => {
  if (num <= 2) {
    return array
  }

  const [nextToLast, last] = array.slice(-2);
  return Fib(num - 1, [...array, nextToLast + last]);
};

console.log(Fib(10));