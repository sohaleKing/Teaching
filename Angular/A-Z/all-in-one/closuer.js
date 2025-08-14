const makeCounter = () => {
    let count = 0
    return function () {
        count++
        return count
    }
}

const inc = makeCounter()

console.log(inc())
console.log(inc())
console.log(inc())
