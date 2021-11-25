// export function fetchCountries(name) {
//    const url = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`;
//       // return fetch(url).then(response => response.json());
//    return fetch(url).then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//        return response.json();
       
//     }
//   );
// }















export function fetchCountries(name) {
  const url = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`;

    return fetch(url)
    .then(response => {
    return response.json()
    })
      .then(data => {
          console.log(data)
            if (data.status === 404) {
            throw new Error(data.status)
            } else {
                return data
        }
    })
}