import axios from 'axios';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikt5UDBERTZVblN6dmFwNUpKUVpyIiwibmFtZSI6IldhbmVzc2EiLCJlbWFpbCI6Indhbm5zYW50dG9zQGdtYWlsLmNvbSIsImNwZiI6IjA1MTIyMzU1Njg5IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTY0NTYzNTA2MH0.wKeB4AmIML_2OkEQFmpmQoqqUGP3D_W_UD-zBCNJvuo";

export const api = axios.create({
  baseURL: 'https://us-central1-missao-newton.cloudfunctions.net/rappi4B',
  headers: {
    auth: token, // Como ainda não está pronto o login, eu coloquei um token mockado (meu token) **localStorage.getItem('token')**
  }
});
