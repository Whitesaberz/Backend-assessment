const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require("./controller");
const { getFortune } = require("./controller");

const { getHeroes, deleteHero, addHero, updateHero } = require("./controller");

//Endpoints

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);

app.get("/api/heroes", getHeroes);
app.delete("/api/heroes/:id", deleteHero);
app.post("/api/heroes", addHero);
app.put("/api/heroes/:id", updateHero);

//

app.listen(4000, () => console.log("Server running on 4000"));
