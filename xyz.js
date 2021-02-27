function sumFibs(num) {
  return num
}
let r = sumFibs(4)
// console.log(r)

// fn = fn-1 + fn-2

const countDown = (num) => {
  if (num === 10) {
    return
  }
  console.log(num)
  countDown(num + 1)
}

function getPrimeNumbers(num) {
  let store = []
  for (let i = 0; i <= num; i++) {
    if (i % 2 !== 0) {
      store.push(i)
    }
  }
  return store
}
const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false
  return num > 1
}
// function sumPrimes(num) {
//   let primNumbers = isPrime(num)
//   let reduceFunc = (store, current) => store + current
//   return primNumbers.reduce(reduceFunc)
// }

let r2 = isPrime(2)
console.log(r2)
//loop thru number
// get prime numbers
// sum up primenumbers
