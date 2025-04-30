function showAlert(){
    alert("Alert!!!")
}
function showEvenNumbers(){
    for (i=0; i<=100; i++){
        if (i%2 == 0) console.log(i)
    }
}
function addTwoNumbers(){
    const a = parseFloat(prompt("Enter number a: "))
    const b = parseFloat(prompt("Enter number b: "))
    const c = a + b
    document.getElementById("div1").innerHTML = `${a}+${b}=${c}`
}
function clock(){
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`
}
setInterval(clock, 1000)
document.innerHTML = "<button>Gues2</button>"

const target = Math.floor(Math.random() * 101)
var attempts = 0
console.log(target)
function checkGuess(){
    const input = document.getElementById("guessInput")
    const message = document.getElementById("message")
    const guess = parseInt(input.value)

    attempts++;

      if (guess < target) {
        message.textContent = `${guess} is too small`;
      } else if (guess > target) {
        message.textContent = `${guess} is too big`;
      } else {
        alert(`You win!!! You found the number in ${attempts} attempts.`);
        location.reload();
      }

      input.value = "";
      input.focus();
}

