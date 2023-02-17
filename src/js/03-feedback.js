import throttle from "lodash.throttle"; 

const STOREGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form  input');
const message = document.querySelector('.feedback-form  textarea');

form.addEventListener('input', dataLocalStorage);
form.addEventListener('submit', throttle(onFormSubmit, 500));

//створили об'єкт який буде зберігати введенні значення
let formData = {};  

//Вішаємо спрослуховування лише на форму
form.addEventListener('input', event => {

  formData[event.target.name] = event.target.value; //отримуэмо введені значення
 // console.log(formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData)); //записуємо значення в localStorage
  
});
  
// відправка форми
function onFormSubmit(event){
  event.preventDefault(); //забороняємо перезавантаження сторінки за замовчуванням
  console.log(JSON.parse(localStorage.getItem(STOREGE_KEY)));
 
  const formReset = event.currentTarget;
  formReset.reset(); //очищуємо введені значення в формі 

  localStorage.removeItem(STOREGE_KEY); //видаляэмо введені значення в localStorage якщо виконана відправка форми 
  
  formData = {};
}; //console.log(formData);


function dataLocalStorage() {
   const savedData = JSON.parse(localStorage.getItem(STOREGE_KEY));//отримуємо значення з сховища localStorage
   
     if (savedData) {             //перевірка на наявність STOREGE_KEY в localStorage
        form.value = savedData;
        //console.log(form.value);
          } 
  }; 



