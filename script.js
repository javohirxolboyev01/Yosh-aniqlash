const input = document.querySelector("input");
const span = document.querySelectorAll("span");
const button = document.querySelector("button");

let hozrYil = 2024;
let sana = 0;
button.addEventListener("click", (e) => {
  sana = hozrYil - input.value;
  span[1].innerText = `${sana} `;
  console.log(sana);
});
