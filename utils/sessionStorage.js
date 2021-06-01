// @ts-check
// @ts-ignore
import { browser } from '$app/env';

/**
 * @param {Object} data
 * @param {string} dataTitle
 */
export function saveToSessionStorage(data, dataTitle) {
  if (browser) {
    sessionStorage.setItem(dataTitle, JSON.stringify(data));
  }
}

/**
 * @param {string} data
 * @param {Boolean} [isArray]
 */
export function getStorageData(data, isArray) {
  // Checar browser
  if (browser) {
    // Checar se dado está no LocalStorage
    let storageData = sessionStorage.getItem(data) ? JSON.parse(sessionStorage.getItem(data)) : [];
    // Se houver dados no LocalStorage buscar somente os valores dos objetos
    if (storageData.length !== 0) {
      let dataValues = isArray ? Object.values(storageData) : storageData;
      // Retonar valores resultantes
      return dataValues;
    }
  }
}

export function clearStorage() {
  if (browser) {
    return sessionStorage.clear();
  }
}
