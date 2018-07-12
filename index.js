function produceDrivingRange(distance) {
  return function (n1, n2) {
    let num1 = parseInt(n1)
    let num2 = parseInt(n2)
    let differenceBetween = Math.abs(num1 - num2) - distance

    if (differenceBetween < 0) {
      return `within range by ${Math.abs(differenceBetween)}`
    } else {
      return `${differenceBetween} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function (amount) {
    return percent * amount
  }
}
