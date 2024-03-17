


const countToTen = (num = 10) => {
  if (num < 1) {
    return;
  }
  console.log(num)
  countToTen(num-1)
};


countToTen();