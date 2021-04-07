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

    div.appendChild(checkbox);
    div.appendChild(newLi);
    div.style.width = "15rem";
    div.style.padding = "1rem";
    div.style.border = ".1rem solid black";
    div.style.borderRadius = "1rem";

    ul.appendChild(div);

    let counter = 0;
    checkbox.addEventListener("click", function () {
      counter++;
      if (counter % 2 == 1) {
        div.style.backgroundColor = "green";
        newLi.style.textDecoration = "line-through";
      } else {
        div.style.backgroundColor = "white";
        newLi.style.textDecoration = "none";
      }
    });
  }
});
