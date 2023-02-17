import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready


  
const pokemons = async () => {

  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10");
  const data = await response.json();
  console.log(data);
 };
 pokemons();
pokemon.innerText(data.name);
data.results.foreach(data =>{
  const ul = document.querySelector("ul");
  const pokemon = document.createElement("li");
  pokemon.innerHTML = data.name;
  pokemon.appendChild(ul);


});
pokemon.appendchild(ul);
  document.body.insertBefore(pokemon, ul);
});
