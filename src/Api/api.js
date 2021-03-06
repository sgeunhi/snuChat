import axios from "axios";

const baseUrl = 'https://snu-chat2.herokuapp.com';
const baseHeaders = {};

const sendRequest = (url, method, data = {}, loginRequired = false) => {
  const headers = {...baseHeaders};
  if (loginRequired) headers['Authorization'] = `Key ${localStorage.getItem('key')}`;
  let queryString = '';
  if (method === 'GET') {
    queryString += Object.entries(data).map(e => e.join('=')).join('&')
  }

  const finalUrl = `${baseUrl}/${url}?${queryString}`;

  return axios({
    url: finalUrl,
    method: method,
    data: method === 'POST' ? data : '',
    headers
  }).then(res => {
    return res.data;
  })
}

const signup = (name) => {
  console.log('회원가입')
  return sendRequest('signup', 'POST', {name});
}

const login = () => {
  return sendRequest('login', 'POST', {}, true);
}

const getRooms = () => {
  return sendRequest('rooms', 'GET');
}

const getChats = (roomId) => {
  return sendRequest(`rooms/${roomId}/chats`, 'GET', {}, true);
}

const createRoom = (name) => {
  return sendRequest('rooms', 'POST', {name}, true);
}

const sendMessage = (roomId, message) => {
  return sendRequest(`rooms/${roomId}/chats`, 'POST',{message},true);
}

export {
  login,
  signup,
  getRooms,
  getChats,
  createRoom,
  sendMessage,
}
