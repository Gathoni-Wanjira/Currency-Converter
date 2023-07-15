const accessToken = "6jY5ZUmhFf4vw6ULUFhR4e9AJznJ01fO";
const baseCurrency = document.getElementById("Base-currency")
const targetCurrency = document.getElementById("Target-currency")


baseCurrency.addEventListener("click", (e) => {
    e.preventDefault();
    
   
    fetch("https://api.currencybeacon.com/v1/currencies", {
        method: "GET",
        headers: {
            Authorization: ` ${accessToken}`,
        }
    })
        .then(response => response.json())
        .then(baseCurrencies => {
            console.log(baseCurrencies);  

        })
        .catch(error => {
            console.error(error);
        });
})

targetCurrency.addEventListener("click", (e) => {
    e.preventDefault();
    
   
    fetch("https://api.currencybeacon.com/v1/currencies", {
        method: "GET",
        headers: {
            Authorization: ` ${accessToken}`,
        }
    })
        .then(response => response.json())
        .then(targetCurrencies => {
            console.log(targetCurrencies);  

        })
        .catch(error => {
            console.error(error);
        });
})