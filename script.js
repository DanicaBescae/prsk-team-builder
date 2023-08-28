"use strict";

const fs = require("fs");
const IMGPATH =
  "https://cdn.glitch.global/4930e4b6-9882-4db6-bff6-584e49223eab/";

let cards = [];

function initializeCards() {
  fs.readdirSync("./img/2021/December/Debut").forEach((file) => {
    console.log(file);
  });
}

// Has variables cardName, thumbnail
class CharacterCard {
  constructor(name, thumbnail) {
    this.cardName = name;
    this.thumbnail = IMGPATH + thumbnail;
  }
}
