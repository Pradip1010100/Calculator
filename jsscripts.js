function appendToInput(value) {
  var inputDisplay = document.getElementById('input-display');
  inputDisplay.value += value;
}

function clearInput() {
  var inputDisplay = document.getElementById('input-display');
  inputDisplay.value = '';
  clearOutput();
}

function clearOutput() {
  var outputDisplay = document.getElementById('output-display');
  outputDisplay.value = '';
}

function calculateResult() {
  var inputDisplay = document.getElementById('input-display');
  var outputDisplay = document.getElementById('output-display');
  try {
    var result = eval(inputDisplay.value);
    outputDisplay.value = result;
  } catch (error) {
    outputDisplay.value = 'Error';
  }
                      }
