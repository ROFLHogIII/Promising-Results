slowMath.add(6,2)
.then((result) => {
    console.log(result)
    return slowMath.multiply(result, 2)
}).then((result2) => {
    console.log(result2)
    return slowMath.divide(result2, 4)
}).then((result3) => {
    console.log(result3)
    return slowMath.subtract(result3, 3)
}).then((result4) => {
    console.log(result4)
    return slowMath.add(98, result4)
}).then((result5) => {
    console.log(result5)
    return slowMath.remainder(result5, 2)
}).then((result6) => {
    console.log(result6)
    return slowMath.multiply(50, result6)
}).then((result7) => {
    console.log(result7)
    return slowMath.remainder(result7, 40)
}).then((result8) => {
    console.log(result8)
    return slowMath.add(32, result8)
}).then((result9) => {
    console.log(result9)
    alert(`the final result is ${result9}`)
}).catch(function (err) {
    // I am the error callback for either function
console.log('something went wrong');
console.log(err); });