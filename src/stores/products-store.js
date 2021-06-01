// Imports
import axios from 'axios';
import { writable } from 'svelte/store';
import { heroku } from '../strapi/url';
import * as yup from 'yup';

// Loja
export const productsStore = writable(fetchData());

// Variáveis para exportação
export const validationSchema = {
  name: yup.string().required('É necessário colocar um nome')
}

// Funções para exportação
// Adicionar Produtos
export async function addProduct (data) {
  // Resposta do servidor
  let res = await axios.post(
    `${heroku}/products`, data
  );
  return res;
}
// Editar Produtos
export async function editProduct (data, id) {
  // Resposta do servidor
  let res = await axios.put(
    `${heroku}/products/${id}`, data
  );
  return res;
}
// Funções internas
// Busca de produtos
async function fetchData () {
  let arr = [];
  // Resposta do Servidor
  let res = await axios.get(`${heroku}/products`);
  let dataArr = res.data;
  if (res.status === 200 && res.statusText === 'OK') {
    return dataArr.map(item => {
      return item;
    })
  }
  return arr;
}