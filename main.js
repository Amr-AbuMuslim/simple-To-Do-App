let inputBox = document.querySelector("input");
let lists = document.querySelector(".lists ul");
let clearButton = document.querySelector(".clearButton");
function addTask() {
  if (inputBox.value === "") alert("Wrong MF !!!");
  else {
    let li = document.createElement("li");
    let text = document.createElement("p");
    text.textContent = inputBox.value;
    li.appendChild(text);
    lists.appendChild(li);
    // make button for editing
    let edit = document.createElement("i");
    edit.innerHTML = "&#9997";
    li.appendChild(edit);
    // make button for remove
    let span = document.createElement("span");
    span.innerHTML = "&#9747";
    li.appendChild(span);
  }
  saveData();
  inputBox.value = "";
}
// check on the events with 2 solutions
lists.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") event.target.classList.toggle("checked");
  if (event.target.tagName === "SPAN") event.target.parentElement.remove();
  if (event.target.tagName === "I") {
    inputBox.value = event.target.previousElementSibling.textContent;
    event.target.previousElementSibling.textContent = "";
  }
  saveData();
});

function saveData() {
  localStorage.setItem("data", lists.innerHTML);
}
function showData() {
  lists.innerHTML = localStorage.getItem("data");
}
function clearData() {
  localStorage.clear();
  showData();
}
showData();
// check on lists 2nd solution
// lists.forEach((ele) => {
//   ele.addEventListener("click", (item) => {
//     item.currentTarget.className == "checked"
//       ? item.currentTarget.classList.remove("checked")
//       : item.currentTarget.classList.add("checked");
//   });
// });
// -------------------------------
