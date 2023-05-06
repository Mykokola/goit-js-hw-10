export { fetchCountries };
import Notiflix from 'notiflix';
const countryListEl = document.querySelector('.country-list');

function fetchCountries(name) {
  name = name.trim();
  if (name) {
    fetch(
      `https://restcountries.com/v3.1/name/${name}?fields=name,name.official,capital,population,flags,languages `
    )
      .then(response => {
        if (!response) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        countryListEl.innerHTML = ``
        if (data.length >= 10) {
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        } else if(data.length===1) {
            console.log(data)
            let oneCauntry = data[0]
            let languagesOneCauntry = Object.values(oneCauntry.languages)
            let oneCauntryResult = `<li>
            <div style="
            display: flex;
            align-items: center;
            gap: 10px;
        ">
            <img style="
            width: 30px;
            height: 30px;
        " src="${oneCauntry.flags.svg}">
            <h2>${oneCauntry.name.common}</h2>
            </div>
            <p>Capital:${oneCauntry.capital[0]}</p>
            <p>Population:${oneCauntry.population}</p>
            <p>Langauge:${languagesOneCauntry}</p>
            </li>`
            countryListEl.insertAdjacentHTML('beforeend', oneCauntryResult);
        }else if(data.length > 1 && data.length < 10){
            let cauntryList = data.map(cauntry => {
                let cauntryResult = `<li style="gap: 11px;display: flex;list-style: none;align-items: center;" ><img style="width: 30px; height: 30px;"   src="${cauntry.flags.svg}">
                    <h2>${cauntry.name.common}</h2>
                    </li>`;
                    return cauntryResult
              });
              countryListEl.insertAdjacentHTML('beforeend', cauntryList);
        
        }else if(countryListEl !== ''){
            Notiflix.Notify.failure("Oops, there is no country with that name");
        }
      })
      .catch(error => {
        console.log('Cauntry is not found');
      });
  }
}
