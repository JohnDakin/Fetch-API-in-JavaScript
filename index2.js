//fetch = Function used to make HTTP requests to fetch resources. (JSON style data, images, files)
//simplified asynchronous data fetching in JavaScript and used for interacting with API's to retrieve and send data asynchronously over the web.
//fetch(url, {options})
//fetch(url, {method: "PUT"})

/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => {

  if(!response.ok){
    throw new Error("Could not fetch resource")
  }
  return response.json();
})
.then(data => console.log(data))
.catch(error => console.error(error));
*/

//Async Await
fetchData();
async function fetchData(){
  try{

    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if(!response.ok){
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    // console.log(data);
    const pokemonSprite = data.sprites.front_default;
    const imageElement = document.getElementById("pokemonSprite");

    imageElement.src = pokemonSprite;
    imageElement.style.display = "block";
  }catch(error){
    console.error(error);
  }
}