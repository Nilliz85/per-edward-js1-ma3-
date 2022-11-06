const apiKey = "c93a32fa9b9b4e0c9d07d940c01229e6";
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=";

const gamesContainer = document.querySelector(".games");
const loading = document.querySelector(".loading");

async function getGames() {
  try {
    debugger;
    const response = await fetch(url + apiKey);
    console.log(response);
    loading.innerHTML = "Loading..."
    const data = await response.json();
    const result = data.result;

    return result;
  } catch (error) {
    console.log("Error");
  }
}

async function listOfGames(){
  getGames();
    .then((data) => {
      loading.innerHTML= "";
      return data;
    })
    .then((data) => {
      for (let i = 0; i < 8; i++){
        const gameName = data[i].name;
        const gameRating = data[i].rating;
        const gameTagsLength = data[i].tags.length;

        gamesContainer.innerHTML += `<h2>${gameName}</h2><h3>${gameRating}</h3><h3>${gameTagsLength}</h3>`;
      }
    })

}
