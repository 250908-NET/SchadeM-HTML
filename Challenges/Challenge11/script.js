function addNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let sum = n1 + n2;

  document.getElementById("result").textContent = "Result: " + sum;
}
function subtractNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let sum = n1 - n2;

  document.getElementById("result").textContent = "Result: " + sum;
}
function multiplyNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let sum = n1 * n2;

  document.getElementById("result").textContent = "Result: " + sum;
}
function divideNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let sum = n1 / n2;

  document.getElementById("result").textContent = "Result: " + sum;
}

document.getElementById("addBtn").addEventListener("click", addNumbers);
document.getElementById("subractBtn").addEventListener("click", subtractNumbers);
document.getElementById("multiplyBtn").addEventListener("click", multiplyNumbers);
document.getElementById("divideBtn").addEventListener("click", divideNumbers);