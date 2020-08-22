

//Reset the form to default

//get the button and inputs
let btn = document.querySelector("button");
let inputs = document.querySelectorAll("input");
let textarea = document.querySelector("textarea");

//Even listener
btn.addEventListener('click', (e) => {
    inputs.forEach( input => input.value = '');
    textarea.value = '';
});