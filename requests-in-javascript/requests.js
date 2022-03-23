const axios = require("axios");

const url = "http://localhost:5000/constellations";
axios
  .get(url)
  .then((response) => {
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.message);
  });

// axios
//     .get(url)
//     .then((response) => {
//         const result = response.data.filter((constellation) => {
//           return constellation.starsWithPlanets < 10;
//         });
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });

// axios
//     .post(url, {
//         name: "mojo",
//         meaning: "complex",
//         starsWithPlanets: "1",
//         quadrant: "MJ7"
//     })
//     .then((response) => {
//         console.log(response.data);
//     });

const idToDelete = "yGbPF-p";
// axios
//     .delete(`${url}/${idToDelete}`)
//     .then((response) => {
//         console.log(response.data)
//     });

axios.get(`${url}/${idToDelete}`);