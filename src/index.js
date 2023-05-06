import './css/styles.css';
import throttle from 'lodash.debounce';
import { fetchAndDrawCountries } from './drawCountry';
const DEBOUNCE_DELAY = 300;
const searchCauntryInput = document.querySelector('#search-box')
    searchCauntryInput.addEventListener('input',throttle(() => fetchAndDrawCountries(searchCauntryInput.value),300))
   