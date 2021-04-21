
const btn = document.querySelector('#btn')
const input = document.querySelector('#input')
console.log(input.value);

document.addEventListener("DOMContentLoaded", evt => {
btn.addEventListener('click',()=>{
console.log(input.value);
})
});