const accessToken = "6jY5ZUmhFf4vw6ULUFhR4e9AJznJ01fO";
const baseCurrency = document.getElementById("Base-currency")
const targetCurrency = document.getElementById("Target-currency")

document.addEventListener("DOMContentLoaded", (e) => {
    
    
    fetch(`https://api.currencybeacon.com/v1/currencies?type=fiat&api_key=${accessToken}`)
    
    .then(response => response.json())
    .then(currencies => {
        console.log(currencies); 
        populateCurrencies(currencies); 

    })
    .catch(error => {
        console.error(error);
        
    });
})


function populateCurrencies (currencies) {
currencies.forEach(currency => {
    const baseOption = document.createElement("option")
    baseOption.textContent = currency.short_code
    baseOption.value = currency.short_code
    baseCurrency.appendChild(baseOption);

const targetOption = baseOption.cloneNode(true) 
targetCurrency.appendChild(targetOption);
    
   
});
}