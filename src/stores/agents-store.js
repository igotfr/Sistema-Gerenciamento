// Imports
import { writable } from 'svelte/store';
import { heroku } from '../strapi/url';
import axios from 'axios';
import * as yup from 'yup';
import { getStorageData } from '../../utils/sessionStorage';
import { browser } from '$app/env';

// Loja
export const agentsStore = writable(fetchData());

// Variáveis internas
let currentDate = new Date();
let minDate = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear() - 18}`;

// Variáveis para exportação
export const validationSchema = {
  fullName: yup.string().required('É necessário colocar um nome'),
  email: yup.string().required('É necessário colocar um e-mail').email(),
  instagram: yup.string().required('É necessário colocar seu instagram'),
  cpf: yup.string().required('É necessário colocar seu cpf').matches(/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/, 'CPF tem que ter o seguinte formato: 000.000.000-00'),
  rg: yup.string().required('É necessário colocar seu rg').min(7, 'Seu rg tem que ter ao menos 7 números'),
  cellphone: yup.string().required('É necessário colocar seu celular').min(9, 'Seu celular tem que ter pelo menos 9 números'),
  phone: yup.string().required('É necessário inserir seu telefone').min(8, 'Seu telefone tem que ter ao menos 8 números')
}

// Funções internas
// Busca de usuários
async function fetchData () {
  let arr = [];
  // Resposta do Servidor
  let res = await axios.get(`${heroku}/users`);
  let dataArr = res.data;
  if (res.status === 200 && res.statusText === 'OK') {
    return dataArr.map(item => {
      return item;
    })
  }
  return arr;
}