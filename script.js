let result = document.getElementById('result');

function appendToResult(value) {
    result.value += value;
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

function clearResult() {
    result.value = '';
}