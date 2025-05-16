let display = document.getElementById("display");
let historyList = document.getElementById("history-list");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(display.value.replace('%', '/100'));
    historyList.innerHTML += `<li>${display.value} = ${result}</li>`;
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

function toggleMode() {
  document.body.classList.toggle("light");
}
