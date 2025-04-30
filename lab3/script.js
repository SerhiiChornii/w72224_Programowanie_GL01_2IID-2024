function ShowAlert(){
    alert("Alert!!!")
}
function ShowEvenNums(){
    let i
    for (i=0; i<=100; i++) {
        if (i%2 == 0) console.log(i)
    }
}
var p1 = document.getElementById("p1")
function AddNumbers(){
    const a = parseInt(prompt("Wpisz liczbę a dla dodawania"))
    const b = parseInt(prompt("Wpisz liczbę b dla dodawania"))
    const c = a + b
    console.log(a + '+' + b + "=" + c)
    console.log(p1)
    p1.innerHTML = a + '+' + b + "=" + c
}

var clock = document.getElementById("clock")
function setTime(){
    var date = new Date()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    console.log("dada")
    clock.innerHTML = `${hours}:${minutes}:${seconds}`
}
setInterval(setTime, 1000)