import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");

const licznikSzklanek = document.querySelector(".licznik__szklanek--js");
const buttonPlus = document.querySelector(".button-plus--js");
const buttonMinus = document.querySelector(".button-minus--js");

//  wartość szklanek przechowuj w localstorage pod kluczem  z dzisiejszą datą
const key = new Date().toISOString().slice(0, 10);

// sprawdzam, czy jest cos pod 'key'. pobieram aktualną wartość z localstorage:
const localStorageValue = localStorage.getItem(key);
if (localStorageValue) {
  currentLicznikSzklanek = localStorageValue;
} else {
  localStorage.setItem(key, 0);
}
licznikSzklanek.innerHTML = currentLicznikSzklanek;

let currentLicznikSzklanek = 0;

buttonPlus.addEventListener("click", () => {
  currentLicznikSzklanek++;
  licznikSzklanek.innerHTML = currentLicznikSzklanek;
  //  teraz trzeba zaktualizować nasz klucz:
  localStorage.setItem(key, currentLicznikSzklanek);
});

buttonMinus.addEventListener("click", () => {
  if (currentLicznikSzklanek > 0) {
    currentLicznikSzklanek--;
  }
  licznikSzklanek.innerHTML = currentLicznikSzklanek;
  localStorage.setItem(key, currentLicznikSzklanek);
});
