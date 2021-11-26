import countriesHbs from './templates/countries.hbs'
import countryHbs from './templates/country.hbs'
import './css/styles.css';
import debounce  from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries'


const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');

input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
   e.preventDefault();
   const inputValue = e.target.value;
   if (inputValue === '') {
     return Notiflix.Notify.info('введи что то нормальное');

    }
   fetchCountries(inputValue)
      .then(noFechSucces)
      .catch(onFechError)
}
      
function noFechSucces(x) {
   console.log(x)
}


function onFechError(error) {
    Notiflix.Notify.failure('Oops, there is no country with that name')
   console.log('Oops, there is no country with that name')
}

// fetch('https://restcountries.com/v2/all?pageSize=10&page=1&fields=name,capital,population,flags,languagesand').then(response => response.json()).then(console.log)
