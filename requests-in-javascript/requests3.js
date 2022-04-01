const axios = require("axios");
const BASE_URL = "http://localhost:5000";


Promise.allSettled([
  axios.get(`${BASE_URL}/constellations/UEUrlfX`),
  axios.get(`${BASE_URL}/constellations/zb8QvVt`),
  axios.get(`${BASE_URL}/constellations/32TN5F8`),
]).then((results) => {
    console.log(results[0].status);
    console.log(results[1].status);
    console.log(results[2].status);
  })
  .catch(error => console.log(`${error}`));




// const ids = ["KGQIwSq", "32TN5F8"];
// getConstellations(ids).then((results) => {
//   console.log(results[0].data);
//   console.log(results[1].data);
// });

// function getConstellations(ids) {
//   const promises = ids.map((id) => {
//     const url = `${BASE_URL}/constellations/${id}`;
//     return axios.delete(url);
//   });

//   return Promise.all(promises);
// }
// getConstellations(ids).then(console.log);
  


  // async function getConstellationNameById(id) {
  //   const url = `${BASE_URL}/constellations/${id}`;
  //   try {
  //     const { data } = await axios.get(url);
  //     return data;
  //   } catch (error) {
  //     throw `Constellation with id of ${id} could not be found.`;
  //   }
  // }

  // getConstellationNameById("n2OEOzp").then(console.log);