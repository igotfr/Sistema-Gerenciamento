/* Fazer setup de usuário */
import { setUser } from '../stores/user';
import { saveToSessionStorage } from '../../utils/sessionStorage';

/**
 * 
 * @param {Promise} response 
 */
export default function setupUser(response) {
  // Desestruturando informações vindas da resposta do servidor
  const { jwt } = response.data;
  const { birthdate, cellphone, cpf, email, full_name, id, instagram, role, phone, rg, username } = response.data.user;
  const { type } = response.data.user.role;

  // Gravando informações dentro de variável interna
  const user = { birthdate, cellphone, cpf, email, full_name, id, instagram, role, phone, rg, username, jwt, type };

  // Salvar usuário no localStorage
  saveToSessionStorage(user, 'user');
  setUser(user);
}