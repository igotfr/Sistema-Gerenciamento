/* Registrar usuário */
import axios from 'axios';
import { heroku } from './url';
import setupUser from './setupUser';

/**
 * 
 * @param {Object} param0 
 * @returns Promise
 */
async function registerUser({email, password, username}) {
  // Resposta do servidor
  const response = await axios.post(`${heroku}/auth/local/register`, {
    username,
    email,
    password
  }).catch(err => {
    // Loga erro
    console.log(err);
  })
  // Se resposta for positiva
  if (response) {
    // Faz o setup do usuários
    setupUser(response)
  }
  // Retorna resposta
  return response;
}

export default registerUser