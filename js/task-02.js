const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const NavItem = document.querySelector("ul");
console.log(NavItem);

const NavItemElPot = document.createElement("li");
NavItemElPot.classList.add("item");
NavItemElPot.textContent = "Potatoes";
// console.log(NavItemElPot);

const NavItemElMush = document.createElement("li");
NavItemElMush.classList.add("item");
NavItemElMush.textContent = "Mushrooms";
// console.log(NavItemElMush);

const NavItemElGar = document.createElement("li");
NavItemElGar.classList.add("item");
NavItemElGar.textContent = "Garlic";
// console.log(NavItemElGar);

const NavItemElTom = document.createElement("li");
NavItemElTom.classList.add("item");
NavItemElTom.textContent = "Tomatos";
// console.log(NavItemElTom);

const NavItemElHerbs = document.createElement("li");
NavItemElHerbs.classList.add("item");
NavItemElHerbs.textContent = "Herbs";
// console.log(NavItemElHerbs);

const NavItemElCond = document.createElement("li");
NavItemElCond.classList.add("item");
NavItemElCond.textContent = "Condiments";
// console.log(NavItemElCond);

NavItem.append(
  NavItemElPot,
  NavItemElMush,
  NavItemElGar,
  NavItemElTom,
  NavItemElHerbs,
  NavItemElCond
);
