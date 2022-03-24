const axios = require("axios");
const BASE_URL = "http://localhost:5000";
const constellationsUrl = `${BASE_URL}/constellations/`;

const mojo = {
  name: "Mojo",
  meaning: "Lion",
  starsWithPlanets: 19,
  quadrant: "NQ2",
};

// axios
//   .get(constellationsUrl)
//   .then(({ data }) => {
//     return data.find(({ name }) => name === mojo.name);
//   })
//   .then((exists) => {
//     if (exists) throw `Constellation "${mojo.name}" already exists.`;
//     return axios
//       .post(constellationsUrl, mojo)
//       .then(({ data }) => console.log(data));
//   })
//   .catch(console.log);




//Unrelated Promise test

new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 10);
    random > 5 ? resolve(random) : reject(random);
  })
    .then((response) => {
      console.log("Resolved!", response);
      return response;
    })
    .catch((response) => {
      console.log("Rejected!", response);
      return response;
    })
    .then((response) => {
      console.log("Add 10", response + 10);
    });