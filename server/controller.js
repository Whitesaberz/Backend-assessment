let heroes = require("./db.json");
let heroID = 11;

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },
  getFortune: (req, res) => {
    const fortunes = [
      "Never pet a burning dog.",
      "Don't spit into the wind.",
      "Never talk to strangers.",
      "Wear bright clothing when traveling at night.",
      "No snowflake in an avalanche ever feels responsible.",
      "If you eat something and nobody sees it, it has no calories.",
    ];

    // choose random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },
  getHeroes: (req, res) => {
    res.status(200).send(heroes);
  },
  deleteHero: (req, res) => {
    let index = heroes.findIndex((elem) => elem.id === +req.params.id);
    heroes.splice(index, 1);
    res.status(200).send(heroes);
  },
  addHero: (req, res) => {
    const { name, movie, imageURL } = req.body;
    let newHero = {
      id: heroID,
      name,
      movie,
      imageURL,
    };
    heroes.push(newHero);
    heroID++;
    res.status(200).send(heroes);
  },
  updateHero: (req, res) => {
    const { id } = req.params;
    const { type } = req.body;
    let index = heroes.findIndex((elem) => +elem.id === +id);
    console.log(type);
  },
};
