// Primero conectamos el JS con el HTML o sea
// Entramos al DOM
const $starWarsPersonajes = document.querySelector(".containerStarWars");

const traerStarWars = async () => {
  try {
    const fetchStarWars = await fetch("https://swapi.dev/api/people");
    const jSONStarWars = await fetchStarWars.json();
    console.log(jSONStarWars);
    const resultStarWars = jSONStarWars.results.map(async (value) => {
      const urlStarWars = await fetch(value.url);
      const charactersStarWars = await urlStarWars.json();
      const name = charactersStarWars.name;
      const birthYear = charactersStarWars.birth_year;
      const gender = charactersStarWars.gender;
      const eyeColor = charactersStarWars.eye_color;
      mostrarCharacters(name, gender, birthYear, eyeColor);
    });
  } catch (error) {
    console.log(error);
  }
};
const mostrarCharacters = (name, gender, birthYear, eyeColor) => {
  const codigoHTML = `<h2>Name: ${name}</h2><li>Gender:${gender}</li><li>Birth Year: ${birthYear}</li><li>Eye Color: ${eyeColor}</li>`;
  $starWarsPersonajes.innerHTML += codigoHTML;
};
traerStarWars();
