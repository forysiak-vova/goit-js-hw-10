import './css/styles.css';
import debounce  from 'lodash.debounce';
import Notiflix from 'notiflix';
import {fetchCountries} from './fetchCountries'
const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');

input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
   e.preventDefault();
   const inputValue = e.target.value;
   fetchCountries(inputValue)
      .then(x => console.log(x))
      .catch(error => console.log(error))
}
      



// function onFechError(error) {
//     Notiflix.Notify.failure(`error`)
// }

fetch('https://restcountries.com/v2/all?fields=name,capital,population,flags,languages').then(response => response.json()).then(console.log)
