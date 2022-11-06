const apiKey = "c93a32fa9b9b4e0c9d07d940c01229e6";
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=";
const gameList = document.querySelector(".games-list");
const loading = document.querySelector(".loading");

async function getGames() {
  try {
    // debugger;
    const response = await fetch(url + apiKey);
    loading.innerHTML = `<h1>LOADING...</h1>`;
    const data = await response.json();
    const result = data.results;
    return result;
  } catch (error) {
    console.log("Error");
  }
}
async function listOfGames() {
  getGames()
    .then((data) => {
      loading.innerHTML = `<h2></h2>`;
      return data;
    })
    .then((data) => {
      for (let i = 0; i < 8; i++) {
        const name = data[i].name;
        const rating = data[i].rating;
        const tagLength = data[i].tags.length;
        gameList.innerHTML += `<div class="games"><h2 class="name" >${name}</h2><h3 class="rating">Rating: ${rating}</h3><h3 class="tag">Length of tag: ${tagLength}</h3></div>`;
      }
    });
}
listOfGames();
