/* Mascara de Dados */

export const maskedCPF = cpf => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
}

export const maskedRG = rg => {
  const rgLength = rg.length;
  if (rgLength === 7) {
    return rg.replace(/(\d{1})(\d{3})(\d{3})/g, "\$1.\$2.\$3")
  } else if (rgLength === 9) {
    return rg.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/g, "\$1.\$2.\$3\-\$4")
  }
}

export const maskedPhone = phone => {
  return phone.replace(/(\d{2})(\d{4})(\d{4})/, "\($1)\$2\-\$3")
}

export const maskedCellPhone = cellphone => {
  return cellphone.replace(/(\d{2})(\d{5})(\d{4})/, "\($1)\$2\-\$3")
}

export const maskedDate = date => {
  const newDate = new Date(date);
  return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
}