import { writable } from 'svelte/store';
import { getStorageData, clearStorage } from '../../utils/sessionStorage';

// Loja de dados do usuário,
const userStore = writable(getStorageData('user'));

// Desloga usuário
export function logoutUser() {
  clearStorage();
  userStore.set({ user: null, jwt: null })
}

// Seta os valores de usuários como valores da loja
export function setUser(user) {
  userStore.set(user);
}

export default userStore;