function checkAge(){
    const age = parseInt(prompt("Enter your age: "))
    console.log(age >= 18? "pełnoletni": "nie pełnoletni")
}

function celToFahr(cel){
    return (cel * 9/5)+32;
}
const temp = 23
console.log(celToFahr(temp))

let tab = [1, 2, 3, 4]
let sum = 0
tab.forEach(element => {
    sum += element
});
console.log(sum)
console.log(sum/tab.length)

console.log(tab.reduce((a,b) => a+b, 0))
console.log(tab.filter(value => value % 2 == 0))
// console.log(tab.reduce((a) => 3*a, 0))
const tab2 = tab.map(el => 3*el)
console.log(tab2)

tab.push(72224)

index = tab.findIndex(x => x === 72224)
console.log(index)

console.log(Math.max(...tab))

let counter = {}
tab.forEach(el => {
    if (el in counter){
        counter[el] += 1
    }
    else{
        counter[el] = 1
    }
})

const wartosc = 4
console.log(counter[wartosc])

const fib = [0, 1]
for (let i = 2; i <= 100; i++){
    fib.push(fib[i-1] + fib[i-2])
}
console.log(fib)
