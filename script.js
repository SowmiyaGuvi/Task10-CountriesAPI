document.addEventListener('DOMContentLoaded', () => {
    // Fetch Countries API
    fetchCountries();

    // Add Event Listener for Weather Button
    document.getElementById('fetch-weather').addEventListener('click', () => {
        const country = document.getElementById('country-input').value;
        fetchWeather(country);
    });

    // Fetch Crypto Prices
    fetchCryptoPrices();
});

// Fetch Countries Data from API
function fetchCountries() {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => {
            displayCountries(countries);
        })
        .catch(error => console.error('Error fetching countries:', error));
}

// Display Countries in the DOM
function displayCountries(countries) {
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryCard = `
            <div class="col-md-4">
                <div class="card">
                    <header>${country.name.common}</>
                    <p>Capital: ${country.capital ? country.capital[0] : 'N/A'}</p>
                    <p>Population: ${country.population.toLocaleString()}</p>
                    <img src="${country.flags.svg}" alt="Flag of ${country.name.common}">
                </div>
            </div>
        `;
        countriesContainer.innerHTML += countryCard;
    });
}

