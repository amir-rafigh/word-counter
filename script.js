const input = document.querySelector('.input');
const button = document.getElementById('button');
const output = document.querySelector('.output');

button.addEventListener('click' , ()=>{
    let value = input.value;
    let length = value.length
    output.innerHTML = `length: ${length}`
})