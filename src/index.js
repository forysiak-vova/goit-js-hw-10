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
      // const resOfX = contry.map(x => x.flags.png)
   // const name = resOfX
   // console.log(...resOfX);
   const markup = countriesHbs(contry);
   
   if (contry.length > 10) {
      return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
      
   }
   
   else if (contry.length >= 2 && contry.length <= 10) {
      console.log(markup)
      container.innerHTML = markup;
      console.log(contry)
      // list.innerHTML = `${resOfX}`
     
   }
   
   else if (contry.length === 1) {
      // list.innerHTML = `img src =${resOfX}`
      container.innerHTML = markup;
      console.log(contry)
   console.log(contry)}
}


function onFechError(error) {
    Notiflix.Notify.failure('Oops, there is no country with that name')
   console.log('Oops, there is no country with that name')
}

// fetch('https://restcountries.com/v2/all?pageSize=10&page=1&fields=name,capital,population,flags,languagesand').then(response => response.json()).then(console.log)
