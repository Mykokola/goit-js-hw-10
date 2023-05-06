import './css/styles.css';
import throttle from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
const DEBOUNCE_DELAY = 300;
const searchCauntryInput = document.querySelector('#search-box')
    searchCauntryInput.addEventListener('input',throttle(() => fetchCountries(searchCauntryInput.value),300))
   