function subtract() {
    //get Elements contain input
    

    let num1Element = document.getElementById('firstNumber');
    let num2Element = document.getElementById('secondNumber');

    // extract/parse input data
    let num1 = Number(num1Element.value);
    let num2 = Number(num2Element.value);


    // manipulate
    let result = num1 - num2;

    // display result in DOM
    let resultDiv = document.getElementsById('result');
    resultDiv.textContent = result;
}