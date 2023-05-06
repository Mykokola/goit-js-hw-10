export { fetchCountries };
function fetchCountries(name) {
  name = name?.trim();
  if (!name) {
    return Promise.resolve([]);
  }
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,name.official,capital,population,flags,languages `
  ).then(response => {
    const resJson = response.json();
    return resJson;
  });
}
