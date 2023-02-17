import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  
const pokemons = async () => {

  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10");
  const data = await response.json();
  console.log(data);
 };
 pokemons();
const pokemon = document.createElement(ul);
pokemon.innerText(data.name);
data.foreach(data => document.createElement(ul));
});
