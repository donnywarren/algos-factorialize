//FACTORIALIZE

const factorialize = (num) => {
  var result = 1;
  for (var i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialize(4))

module.exports = {
  factorialize
}