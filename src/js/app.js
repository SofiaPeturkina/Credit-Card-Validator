import CardFormValidator from './widget';

const container = document.querySelector('.container');
const form = new CardFormValidator(container);

form.bindToDom();