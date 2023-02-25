const categories = document.querySelector("#categories");
const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.children.length}`);

items.forEach((value) => {
  const title = value.firstElementChild;
  const list = value.lastElementChild;

  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${list.children.length}`);
});
