export function fetchCountries(name) {
   const url = `https://restcountries.com/v3.1/name/${name}`;
      return fetch(url).then(response => response.json());
}