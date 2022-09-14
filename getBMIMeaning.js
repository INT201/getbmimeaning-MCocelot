const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight/(height^2)
}
function getBMIMeaning(weight, height) {
  if(calculateBMI(weight, height) < 18.5){
    return "Underweight"
  }else if(calculateBMI(weight, height) < 24.9 && calculateBMI(weight, height) >= 18.5){
    return "Normal weight"
  }else{
    return "Overweight"
  }
}
module.exports = getBMIMeaning
