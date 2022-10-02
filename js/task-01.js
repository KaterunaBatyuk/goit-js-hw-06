const ItemEl = document.querySelectorAll(".item");
console.log("Number of categories:", ItemEl.length);

const resultArr = ItemEl.forEach((element) => {
  const HeadOfCategory = element.querySelector("h2");
  const ItemOfCategory = element.querySelectorAll("li");
  console.log("Category:", HeadOfCategory.textContent);
  console.log("Elements:", ItemOfCategory.length);
});
