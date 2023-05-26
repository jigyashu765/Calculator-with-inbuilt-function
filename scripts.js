const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");



buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.value = display.value + button.value;
  });
});

function Clear() {
    display.value = "";
}

function result() {
    display.value = eval(display.value);
}
