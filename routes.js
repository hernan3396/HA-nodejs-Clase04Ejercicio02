const mongoose = require("mongoose");

const newTeam = new mongoose.Schema({
  code: String,
  nombre: String,
  flag: String,
});

const Team = mongoose.model("Team", newTeam);

module.exports = (app) => {
  app.post("/teams", async (req, res) => {
    const team = new Team({
      code: req.body.code,
      nombre: req.body.nombre,
      flag: req.body.flag,
    });

    try {
      const newTeam = await team.save();
      res.status(201).json(newTeam);
    } catch (err) {
      res.status(400).json(err);
    }
  });
};
