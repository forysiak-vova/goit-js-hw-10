import countriesHbs from './templates/countries.hbs'
import countryHbs from './templates/country.hbs'
import './css/styles.css';
import debounce  from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries'
import { trim } from 'lodash';


const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');
const container = document.querySelector('.country-info');
const name = document.querySelector('.languages-name');


input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
   e.preventDefault();
   const inputValue = e.target.value;
   const inputValueTrim = inputValue.trim();
   if (inputValueTrim === '') {
      list.innerHTML = '';
      container.innerHTML = '';
      return;
   }
   
   fetchCountries(inputValueTrim)
      .then(onFechSucces)
      .catch(onFechError)
}
   
function onFechSucces(contry) {
   const markup = countriesHbs(contry);
   const markupContry = countryHbs(contry);

   if (contry.length > 10) {
      return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
      
   }
   
   else if (contry.length >= 2 && contry.length <= 10) {
     
      container.innerHTML = markup;
     
     
   }
   
   else if (contry.length === 1) {
      container.innerHTML = markupContry;
     
   
   } 
}



function onFechError(error) {
    Notiflix.Notify.failure('Oops, there is no country with that name')

   container.innerHTML = '';
}

// fetch('https://restcountries.com/v2/all?pageSize=10&page=1&fields=name,capital,population,flags,languagesand').then(response => response.json()).then(console.log)
