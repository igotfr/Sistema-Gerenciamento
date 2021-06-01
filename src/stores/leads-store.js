// Imports
import { writable } from 'svelte/store';
import { heroku } from '../strapi/url';
import axios from 'axios';
import * as yup from 'yup';
import { getStorageData } from '../../utils/sessionStorage';
import { browser } from '$app/env';

// Loja
export const leadsStore = writable(fetchData())

// Variáveis internas
let currentDate = new Date();
let minDate = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear() - 18}`;

// Variáveis para exportação
// Objeto de validação de formulário
export const validationSchema = {
  fullName: yup.string().required('É necessário colocar um nome'),
  email: yup.string().required('É necessário colocar um e-mail').email(),
  instagram: yup.string().required('É necessário colocar seu instagram'),
  cpf: yup.string().required('É necessário colocar seu cpf').matches(/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/, 'CPF tem que ter o seguinte formato: 000.000.000-00'),
  rg: yup.string().required('É necessário colocar seu rg').min(7, 'Seu rg tem que ter ao menos 7 números'),
  cellphone: yup.string().required('É necessário colocar seu celular').min(9, 'Seu celular tem que ter pelo menos 9 números'),
  phone: yup.string().required('É necessário inserir seu telefone').min(8, 'Seu telefone tem que ter ao menos 8 números')
}

export const mensagens_de_erro = {
  fullName: "É necessário colocar um nome",
  email: "É necessário colocar um e-mail",
  emailInvalid: "Formato de e-mail inválido",
  instagram: "É necessário colocar seu Instagram",
  cpf: "É necessário colocar seu CPF",
  cpfInvalid: "CPF tem que ter o seguinte formato: 000.000.000-00",
  rg: "É necessário colocar seu RG",
  rgInvalid: "Seu rg tem que ter ao menos 7 números",
  cellphone: "É necessário colocar seu celular",
  cellphoneInvalid: "Número de celular inválido",
  phone: "É necessário inserir seu telefone",
  phoneInvalid: "Seu telefone tem que ter ao menos 8 números",
  instagram: "É necessário colocar seu instagram",
  instagramInvalid: "Instagram inválido"
};

export function emailValidator(email) {
  const regex= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !regex.test(String(email).toLowerCase());
}

export function cellphoneValidator(cellphone) {
  //var regex = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$');
  const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return !regex.test(cellphone);
}

export function cpfValidator(cpf) {
  const regex = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
  return !regex.test(cpf);
}

export function rgValidator(rg) {
  const regex = /^[-+\/\s]*([0-9][-+\/\s]*){7,}$/;
  return !regex.test(rg);
}

export function instagramValidator(instagram) {
  const regex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
  return !regex.test(instagram);
}

export function generalValidator() {
  return emailValidator;
}

// Funções para exportação
// Adicionar Leads
export async function addLead (data) {
  // Resposta do servidor
  let res = await axios.post(
    `${heroku}/leads`, data);
  return res;
}
// Editar Leads
export async function editLead(data, id) {
  const res = await axios.put(`${heroku}/leads/${id}`, data);
  return res;
}

// Funções internas
// Busca de Leads
async function fetchData () {
  let arr = [];
  let res = await axios.get(`${heroku}/leads`);
  let dataArr = res.data;
  if (res.status === 200 && res.statusText === 'OK') {
    return dataArr.map(item => {
      return item;
    })
  }
  return arr;
}