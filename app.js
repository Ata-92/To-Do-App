const input = document.getElementsByTagName("input")[0];
const button = document.getElementsByTagName("button")[0];
button.style.cursor = "pointer";
const ul = document.querySelector(".main__to-dos");

button.addEventListener("click", itemAdd);

input.addEventListener("keydown", (key) => {
  if (key.code == "Enter") {
    itemAdd();
  }
});

function itemAdd() {
  if (input.value == "") {
    alert("Please type something to do...");
  } else {
    const div = document.createElement("div");
    div.style.width = "38rem";
    div.style.padding = "1rem";
    div.style.margin = "1rem 0";
    div.style.backgroundColor = "white";
    div.style.borderRadius = "1rem";
    div.style.textAlign = "left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.display = "inline";

    const newLi = document.createElement("li");
    newLi.style.listStyleType = "none";
    newLi.style.display = "inline-block";
    newLi.textContent = input.value;
    newLi.style.width = "32rem";
    newLi.style.marginLeft = "1rem";
    newLi.style.color = "black";
    newLi.style.overflow = "auto";

    const bin = document.createElement("img");
    bin.src = "1001389331.jpg";
    bin.style.width = "2rem";
    bin.style.float = "right";
    bin.style.cursor = "pointer";

    div.appendChild(checkbox);
    div.appendChild(newLi);
    div.appendChild(bin);

    ul.appendChild(div);
    input.value = "";

    let counter = 0;
    checkbox.addEventListener("click", function done() {
      counter++;
      if (counter % 2 == 1) {
        div.style.backgroundColor = "yellowgreen";
        newLi.style.textDecoration = "line-through";
      } else {
        div.style.backgroundColor = "white";
        newLi.style.textDecoration = "none";
      }
    });

    bin.addEventListener("click", function itemDelete() {
      div.remove();
    });
  }
};
