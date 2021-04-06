const input = document.getElementsByTagName("input")[0];
const button = document.getElementsByTagName("button")[0];
const ul = document.querySelector(".main__to-dos");

button.addEventListener("click", function () {
  const checkbox = document.createElement("span");
  const newLi = document.createElement("li");
  checkbox.textContent = "\u25a1";
  newLi.textContent = input.value;
  ul.appendChild(checkbox);
  ul.appendChild(newLi);
})
