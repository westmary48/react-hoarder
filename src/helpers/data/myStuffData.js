import axios from 'axios';

import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getMyStuff = uid => new Promise((resolve, reject) => {
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

export default { getMyStuff };
