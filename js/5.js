// 1
const btnMsg = document.getElementById("btn-msg");
function clickBtnMsg() {
  console.log(btnMsg.dataset.text);
}
btnMsg.addEventListener("click", clickBtnMsg);
// 2
function onMouseOver() {
  btnMsg.classList.add("bgColor");
  console.log("over");
}
function onMouseOut() {
  btnMsg.classList.remove("bgColor");
  console.log("out");
}
btnMsg.addEventListener("mouseover", onMouseOver);
btnMsg.addEventListener("mouseout", onMouseOut);
// // 3
// const allTag = document.body;
// console.log(document);
// const tag = document.getElementById("tag");
// console.log(tag);

// function clickAllNode(e) {
//   //   e.stopPropagation();
//   let value = (document.onclick = function () {
//     return this.tagName;
//   })();
//   tag.textContent += `${value} хуй `;
// }
// document.addEventListener("click", clickAllNode);
// 4
const generateLi = document.getElementById("btn-generate");
console.log(generateLi);
const ul = document.querySelector("ul");

console.dir(ul);
function generateItem() {
  const li = document.createElement("li");
  const index = ul.querySelectorAll("li");
  li.textContent = `Item ${index.length + 1}`;
  ul.appendChild(li);
}
generateLi.addEventListener("click", generateItem);
