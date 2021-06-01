/* Login de Usuários */
import axios from 'axios';
import { heroku } from './url';
import setupUser from './setupUser';

async function loginUser({email, password}) {
  // Resposta do servidor
  const response = await axios.post(`${heroku}/auth/local`, {
    identifier: email,
    password
  }).catch(err => {
    // Logando erros
    console.log(err);
  })
  if (response) {
    // Fazer setup do usuário caso venha 200
    setupUser(response);
  }
  // Retornar reposta
  return response;
}

export default loginUser