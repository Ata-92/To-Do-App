const input = document.getElementsByTagName("input")[0];
const button = document.getElementsByTagName("button")[0];
const ul = document.querySelector(".main__to-dos");

button.addEventListener("click", function () {
  if (input.value == "") {
    alert("Please type something to do...");
  } else {
    const div = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const newLi = document.createElement("li");
    newLi.style.listStyleType = "none";
    newLi.style.display = "inline";
    newLi.textContent = input.value;
    newLi.style.marginLeft = "1rem";

  }
});
