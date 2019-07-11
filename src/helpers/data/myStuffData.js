import axios from 'axios';

import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getMyThings = uid => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/things.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const things = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        things.push(res.data[fbKey]);
      });
      resolve(things);
    })
    .catch(err => reject(err));
});

const deleteThing = thingId => axios.delete(`${baseUrl}/things/${thingId}.json`);

const getSingleThing = thingId => axios.get(`${baseUrl}/things/${thingId}.json`);

const postThing = newThing => axios.post(`${baseUrl}/things.json`, newThing);

const putThing = (updatedThing, thingId) => axios.put(`${baseUrl}/things/${thingId}.json`, updatedThing);

export default {
  getMyThings,
  deleteThing,
  getSingleThing,
  postThing,
  putThing,
};
