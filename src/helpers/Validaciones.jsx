const regExpTexto = /^[A-Za-z\s?]+$/;
// Esta expresión regular valida que un texto contenga solo letras (mayúsculas o minúsculas) y espacios.
const regExpEmail =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   Esta expresión regular valida el formato de un correo electrónico.
const regExpTelefono = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/;
// Esta expresión regular valida formatos de números de teléfono, incluidos los internacionales.
const regExpTextoEsp = /^[\w\W ]+$/;
// Esta expresión regular valida que el texto contenga cualquier carácter alfanumérico, incluyendo letras, números, espacios y caracteres especiales.

export const validateTexto = (field) => {
	if (regExpTexto.test(field) && field.trim() !== '') {
		return true;
	} else {
		return false;
	}
};

export const validateTextoEsp = (field) => {
	if (regExpTextoEsp.test(field) && field.trim() !== '') {
		return true;
	} else {
		return false;
	}
};

export const validateEmail = (field) => {
	if (regExpEmail.test(field) && field.trim() !== '') {
		return true;
	} else {
		return false;
	}
};

export const validateTelefono = (field) => {
	if (regExpTelefono.test(field) && field.trim() !== '') {
		return true;
	} else {
		return false;
	}
};
