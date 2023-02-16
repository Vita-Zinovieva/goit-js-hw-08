import throttle from "lodash.throttle"; 

const STOREGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form  input');
const message = document.querySelector('.feedback-form  textarea');

form.addEventListener('input', dataLocalStorage);
form.addEventListener('submit', throttle(onFormSubmit, 500));

//створили об'єкт який буде зберігати введенні значення
const formData = {};  

//Вішаємо спрослуховування лише на форму
form.addEventListener('input', event => {

  formData[event.target.name] = event.target.value; //отримуэмо введені значення

  localStorage.setItem('feedback-form-state', JSON.stringify(formData)); //записуємо значення в localStorage
  
});console.log(formData);
  
// відправка форми
function onFormSubmit(event){
  event.preventDefault(); //забороняємо перезавантаження сторінки за замовчуванням
  
  const formReset = event.currentTarget;
  formReset.reset(); //очищуємо введені значення в формі 

  localStorage.removeItem(STOREGE_KEY); //видаляэмо введені значення в localStorage якщо виконана відправка форми 

}; 

function dataLocalStorage() {
   const savedData = JSON.parse(localStorage.getItem(STOREGE_KEY));
   
     if (savedData) {
      console.log(savedData);
    } 
  }; 



