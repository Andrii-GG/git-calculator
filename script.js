let arrCurrent = "";
let arrHistory = "";
console.log(typeof arrCurrent);

let screenHistory = document.querySelector(
  "div.container-item.screen .history"
);

let screenCurrent = document.querySelector(
  "div.container-item.screen .current"
);

function screenPrint() {
  screenHistory.textContent = arrHistory.replace(/([-+=*/])/g, " $1 ");
  screenCurrent.textContent = arrCurrent.replace(/([-+=*/])/g, " $1 ");
}

document.querySelector("div.container").addEventListener("click", function () {
  if (arrCurrent.length > 13) {
    screenCurrent.style.fontSize =
      parseInt(window.getComputedStyle(screenCurrent).fontSize) * 0.95 + "px";
  } else {
    screenCurrent.style.fontSize = "48px";
  }
});

document
  .querySelector("button.button-reset")
  .addEventListener("click", function () {
    arrCurrent = "";
    screenPrint();
  });

document.querySelectorAll("button:not(.button-reset)").forEach((button) => {
  button.addEventListener("click", function () {
    if (button.textContent != "RESET") {
      if (
        (button.value == "+" &&
          /([-+=*/.])/.test(arrCurrent[arrCurrent.length - 1])) ||
        (button.value == "+" && arrCurrent.length == 0)
      ) {
      } else if (
        button.value == "-" &&
        /([-+=*/.])/.test(arrCurrent[arrCurrent.length - 1])
      ) {
      } else if (
        (button.value == "*" &&
          /([-+=*/.])/.test(arrCurrent[arrCurrent.length - 1])) ||
        (button.value == "*" && arrCurrent.length == 0)
      ) {
      } else if (
        (button.value == "/" &&
          /([-+=*/.])/.test(arrCurrent[arrCurrent.length - 1])) ||
        (button.value == "/" && arrCurrent.length == 0)
      ) {
      } else if (
        button.value == "." &&
        /([-+=*/.])/.test(arrCurrent[arrCurrent.length - 1])
      ) {
      } else if (button.value == "=") {
        let result = eval(arrCurrent);
        arrHistory = arrCurrent;
        arrHistory += "=";
        arrHistory += result;
        arrCurrent = "";
        arrCurrent += result;
        screenPrint();
      } else {
        arrCurrent += button.value;
        screenPrint();
      }
    }
  });
});
