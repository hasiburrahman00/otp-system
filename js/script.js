
const generatorBtn = document.getElementById('generate-btn');
const generatedDisplay = document.getElementById('generated-display');
const numberPad = document.getElementById('calculator');
const typedPin = document.getElementById('insert-otp');
const submit = document.getElementById('submit-code');
const green = document.getElementById('green');
const red = document.getElementById('red');


generatorBtn.addEventListener('click', function () {

    const otp = Math.floor(Math.random() * 9000) + 1000;
    generatedDisplay.value = otp;
})

numberPad.addEventListener('click', function (e) {
    const number = e.target.innerText;
    const previousNumber = typedPin.value;

    if (isNaN(number)) {
        if (number === 'C') {
            typedPin.value = '';
        } else if (number === '<') {
            const digit = previousNumber.split('');
            digit.pop();
            const remainDigit = digit.join('');
            typedPin.value = remainDigit;
        }
    }else {
        const update = previousNumber + number;
        typedPin.value = update;
    }
})

submit.addEventListener('click', function() {
    if(generatedDisplay.value === typedPin.value){
        red.style.display = 'none'
        green.style.display = 'block'
    }else {
        red.style.display = 'block'
        green.style.display = 'none'
    }
})