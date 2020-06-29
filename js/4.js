// "use strict";

// //   1

// const ul = document.querySelector("ul");
// ul.classList.add("list");
// console.log(ul);

// //   2

// const span = document.querySelector("span");
// console.log(span);

// const link = span.nextElementSibling;
// link.setAttribute("id", "link");
// console.log(link);

// //  3

// const li1 = ul.querySelector("li");
// li1.classList.add("item");
// console.log(li1);
// const li4 = ul.lastElementChild;
// const li3 = li4.previousElementSibling;
// li3.classList.add("item");
// console.log(li3);

// //  4

// const links = document.querySelectorAll("a");
// console.log(links);
// const allLink = links.forEach((el) => {
//   el.classList.add("custom-link");
// });
// // console.log(allLink);

// 5.1
// const ul = document.querySelector("ul");
// const fragment = document.createDocumentFragment();

// const lis = [
//   `item ${ul.children.length + 1}`,
//   `item ${ul.children.length + 2}`,
// ];
// lis.forEach((li) => {
//   const item = document.createElement("li");
//   item.classList.add("new-item");
//   item.textContent = li;
//   fragment.appendChild(item);
// });
// console.log(lis);
// ul.appendChild(fragment);

// 5.2
// const ul = document.querySelector("ul");
// const links = ul.querySelectorAll("a");
// links.forEach((el) => {
//   el.insertAdjacentHTML("beforeend", "<strong></strong>");
// });
// console.log(links);

// // 5.3
// const body = document.body;
// const div = body.querySelector("div");
// console.log(body);
// const img = document.createElement("img");
// img.setAttribute("src", "../img/logo.png");
// img.setAttribute("alt", "img");
// body.insertBefore(img, div);
// console.log(img);

// 5,4
// const mark = document.querySelector("mark");
// console.log(mark);
// mark.insertAdjacentHTML("beforeend", "green");
// mark.classList.add("green");
