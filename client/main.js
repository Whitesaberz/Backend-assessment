const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");

const heroesContainer = document.querySelector("#heroes-container");
const form = document.querySelector("form");

const baseURL = `http://localhost:4004/api/heroes`;

const heroesCallback = ({ data: heroes }) => displayHeroes(heroes);
const errCallback = (err) => console.log(err);

const getAllHeroes = () =>
  axios.get(baseURL).then(heroesCallback).catch(errCallback);
const addHero = (body) =>
  axios.post(baseURL, body).then(heroesCallback).catch(errCallback);
const deleteHero = (id) =>
  axios.delete(`${baseURL}/${id}`).then(heroesCallback).catch(errCallback);
const updateHero = (id, type) =>
  axios
    .put(`${baseURL}/${id}`, { type })
    .then(heroesCallback)
    .catch(errCallback);

function submitHandler(e) {
  e.preventDefault();

  let name = document.querySelector("#name");
  let movie = document.querySelector("#movie");
  let imageURL = document.querySelector("#img");

  let bodyObj = {
    name: name.value,
    movie: movie.value,
    imageURL: imageURL.value,
  };

  addHero(bodyObj);

  name.value = "";
  movie.value = "";
  imageURL.value = "";
}

function createHeroCard(hero) {
  const heroCard = document.createElement("div");
  heroCard.classList.add("hero-card");

  heroCard.innerHTML = `<img alt='hero image' src=${hero.imageURL} class="hero-image"/>
    <p class="name">${hero.name}</p>
    <div class="btns-container">
        <button onclick="updateHero(${hero.id}, 'minus')">-</button>
        <p class="hero-movie">$${hero.movie}</p>
        <button onclick="updateHouse(${hero.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteHero(${hero.id})">delete</button>
    `;

  heroesContainer.appendChild(heroCard);
}

function displayHeroes(arr) {
  heroesContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createHeroCard(arr[i]);
  }
}

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
form.addEventListener("submit", submitHandler);

getAllHeroes();
