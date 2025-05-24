// zad 1

function silnia(n){
    return (n === 1? 1: n * silnia(n-1))
}

console.log(silnia(5))

// zad 2
const btns = document.querySelectorAll('.btn')

let selected = null

btns.forEach(btn =>{
    btn.addEventListener('click', () =>{
        btns.forEach(b => b.classList.remove('selected'));
        btn.classList.toggle('selected');
    });
});

// zad 3
const vbtn = document.getElementById('vbtn')

vbtn.addEventListener('click', () =>{
    const vel = document.getElementById('vel')
    vel.toggleAttribute('hidden')
})

// zad 4
function add_element(){
    const inpt = document.getElementById('add_inpt')
    const ul = document.querySelector('ul')
    if (inpt.value != ''){
        const li = document.createElement('li')
        li.textContent = inpt.value
        ul.appendChild(li)
    }
    inpt.value = ''
}

// zad 5
function add_fullname(){
    const table = document.querySelector('table')
    const name_inpt = document.getElementById('name_inpt')
    const surname_inpt = document.getElementById('surname_inpt')

    const name = name_inpt.value
    const surname = surname_inpt.value

    if (name != '' &  surname != ''){
        const row = table.insertRow()
        var name_cell = row.insertCell()
        name_cell.textContent = name
        var surname_cell = row.insertCell()
        surname_cell.textContent = surname

        name_inpt.value = ''
        surname_inpt.value = ''
    }

}
