const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((ingridient) => {
  const list = document.querySelector("#ingredients");
  const li = document.createElement("li");

  li.textContent = ingridient;
  li.classList.add("item");

  list.append(li);
});
