import axios from 'axios';

export const getUsersAPI = () => {
    return new Promise((resolve, reject) => {
        const request = {};
        axios.get('/data/users.json', request)
          .then(res => {
            resolve(res.data);
          })
          .catch(error => {
            reject(error);
          });
    });
}

export const getCompaniesAPI = () => {
  return new Promise((resolve, reject) => {
      const request = {};
      axios.get('/data/company.json', request)
        .then(res => {
          resolve(res.data);
        })
        .catch(error => {
          reject(error);
        });
  });
}

