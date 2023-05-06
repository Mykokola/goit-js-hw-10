import {fetchCountries} from './fetchCountries'
export {fetchAndDrawCountries}
const countryListEl = document.querySelector('.country-list');

function getCauntryRow(country, showDetails) {
    const languagesOneCauntry = Object.values(country.languages);
    const header = `  <div style="
    display: flex;
    align-items: center;
    gap: 10px;
  ">
    <img style="
    width: 30px;
    height: 30px;
  " src="${country.flags.svg}">
    <h2>${country.name.common}</h2>
    </div>`;
    const details = showDetails
      ? `<p>Capital:${country.capital[0]}</p>
    <p>Population:${country.population}</p>
    <p>Langauge:${languagesOneCauntry}</p>`
      : ``;
    return `<li>
    ${header}
    ${details}
    </li>`;
  }
  function drawCountries(data) {
    const showDetails = data.length == 1;
    const countryList = data.map(e => getCauntryRow(e, showDetails));
    countryListEl.insertAdjacentHTML('beforeend', countryList.join(''));
  }
  function fetchAndDrawCountries(name) {
    fetchCountries(name)
      .then(data => {
        countryListEl.innerHTML = ``;
        if (data.length >= 10) {
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        } else if (data.length) {
          drawCountries(data);
        }
      })
      .catch(error => {
        Notiflix.Notify.failure('Oops, there is no country with that name');
      });
  }
  