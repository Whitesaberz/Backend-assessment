const heroes = require("./db.json");
let heroID = 11;

module.exports = {
  getHeroes: (req, res) => res.status(200).send(heroes),
  deleteHero: (req, res) => {
    let index = heroes.findIndex((elem) => elem.id === +req.params.id);
    heroes.splice(index, 1);
    res.status(200).send(heroes);
  },
  addHero: (req, res) => {
    let { name, movie, imageURL } = req.body;
    let newHero = {
      id: heroID,
      name,
      movie,
      imageURL,
    };
    heroes.push(newHero);
    res.status(200).send(heroes);
    heroID++;
  },
  updateHero: (req, res) => {
    let existingHeroName = req.params.name;
    let newUsername = req.body.username;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === existingHeroName) {
        user[i].username = newUsername;
        res.status(200).send("Hero updated.");
        return;
      }
    }
    res.status(400).send("Hero not found.");
  },
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
};
