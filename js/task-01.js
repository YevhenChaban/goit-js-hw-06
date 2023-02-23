const categories = document.querySelector("#categories");
const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.children.length}`);

items.forEach((value) => {
  const title = value.querySelector("h2");
  const list = value.querySelector("ul");

  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${list.children.length}`);
});
