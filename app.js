// All the Ui elements.
const colorPicker = document.querySelector('#colorpicker');

const colorBtn = document.querySelector('.colorbtn');

//Event listner on input[type="color"] element
colorPicker.addEventListener('change', changeColor);

// change button event listener
colorBtn.addEventListener('click', changeToInputColor);

//function to change bg-color via color picker.
function changeColor(){
    const colorVariable = '--color'; //color variable from the CSS
    
    document.documentElement.style.setProperty(colorVariable, colorPicker.value);
}

// function to change bg-color via the text input.
function changeToInputColor(){
    const colorVariable = "--color";
    const colorInput = document.querySelector('#colorinput').value;

    if(colorInput === ''){
        alert('Color field cannot be empty');
    }else{
        document.documentElement.style.setProperty(colorVariable, colorInput);
    }

}
