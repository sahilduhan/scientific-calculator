let equation = document.getElementById('result');

function appendToEquation(e) {
    equation.innerText += e.target.value;
}

function removeEquation(){
    document.getElementById('result').innerText = "";
}

function clearLastNumber(){
    const _equation = document.getElementById('result').innerText;
    document.getElementById('result').innerText = _equation.substring(0,_equation.length-1);
}

function calculateResult(){
    const _equation = document.getElementById('result').innerText;
    try {
        document.getElementById('result').innerText = eval(_equation)
    } catch (error) {
        alert("Invalid equation.")
    }
}

function calculateSquare(){
    const _number = document.getElementById('result').innerText;
    document.getElementById('result').innerText = Math.pow(_number,2);
}

function calculateSquareRoot(){
    const _number = document.getElementById('result').innerText;
    document.getElementById('result').innerText = Math.sqrt(_number);
}


function calculateCube(){
    const _number = document.getElementById('result').innerText;
    document.getElementById('result').innerText = Math.pow(_number,3);
}


function calculateCubeRoot(){
    const _number = document.getElementById('result').innerText;
    document.getElementById('result').innerText = Math.cbrt(_number);
}


function calculateSin(){
    const _number = document.getElementById('result').innerText;
    document.getElementById('result').innerText = Math.sin(_number);
}

function calculateCos(){
    const _number = document.getElementById('result').innerText;
    document.getElementById('result').innerText = Math.cos(_number);
}
function calculateTan(){
    const _number = document.getElementById('result').innerText;
    document.getElementById('result').innerText = Math.tan(_number);
}
