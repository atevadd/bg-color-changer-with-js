// All the Ui elements.
const colorPicker = document.querySelector('#colorpicker');

const colorBtn = document.querySelector('.colorbtn');

//Event listner on input[type="color"] element
colorPicker.addEventListener('change', changeColor);

// change button event listener
colorBtn.addEventListener('click', changeToInputColor);

//function to change bg-color via color picker
function changeColor(){
    const colorVariable = '--color';
    
    document.documentElement.style.setProperty(colorVariable, colorPicker.value);
}

function changeToInputColor(){
    const colorVariable = "--color";
    const colorInput = document.querySelector('#colorinput').value;

    if(colorInput === ''){
        alert('Color field cannot be empty');
    }else{
        document.documentElement.style.setProperty(colorVariable, colorInput);
    }

}