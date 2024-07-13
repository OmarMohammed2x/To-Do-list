const btn = document.getElementById("add");
const list = document.getElementById("list");
const colorIn = document.getElementById("color");
const taskIn = document.getElementById("task");
btn.addEventListener("click", (evnt) => {
  if (taskIn.value.trim() === "" || colorIn.value === "#000000") {
    alert("Enter a Valid Inputs");
  } else {
    const item = document.createElement("li");
    const removeBtn = document.createElement("button");
    const para = document.createElement("p");
    removeBtn.textContent = "remove";
    removeBtn.style.backgroundColor = colorIn.value;
    removeBtn.addEventListener("click", () => {
      removeBtn.parentNode.remove();
    });
    para.textContent = taskIn.value.trim();
    item.style.backgroundColor = colorIn.value;

    list.appendChild(item);
    item.appendChild(para);
    item.appendChild(removeBtn);
    taskIn.value = "";
  }
});
