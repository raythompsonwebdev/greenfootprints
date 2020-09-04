import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

//get user function
export function getUsers() {
  return get('users');
}

//GET request to api
function get(url) {

  return fetch(baseUrl + url).then(onSuccess, onError);

}

//response
function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
