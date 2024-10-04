const inputBox = document.getElementById("input_box");
const listWrap = document.getElementById("list_wrap");
function addTask() {
  if (inputBox.value === "") {
    alert("You have to write text");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listWrap.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}

listWrap.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
