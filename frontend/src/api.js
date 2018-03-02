import fetch from 'isomorphic-fetch';
const APIURL = '/api/backend/';

export async function getScreenData() {
  return fetch(APIURL)
    .then(resp => {
      if(!resp.ok) {
        if(resp.status >=400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          });
        } else {
          let err = {errorMessage: 'Please try again later, server is not responding'};
          throw err;
        }
      }
      return resp.json();
   });
}

export async function createScreenData(val){
  return fetch(APIURL, {
     method: 'post',
     headers: new Headers({
       'Content-Type': 'application/json',
     }),
    body: JSON.stringify({name: val})
   })
    .then(resp => {
      if(!resp.ok) {
        if(resp.status >=400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          });
        } else {
          let err = {errorMessage: 'Please try again later, server is not responding'};
          throw err;
        }
      }
      return resp.json();
   });
}