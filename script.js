const accessToken = "6jY5ZUmhFf4vw6ULUFhR4e9AJznJ01fO";
const baseCurrency = document.getElementById("Base-currency")
const targetCurrency = document.getElementById("Target-currency")
const convertBtn = document.getElementById("convert-btn")
const inputAmount = document.getElementById("exact-base-figure")

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


function populateCurrencies(currencies) {
    baseCurrency.innerHTML = ""
    targetCurrency.innerHTML = ""

    currencies.forEach(currency => {
        const baseOption = document.createElement("option")
        baseOption.textContent = currency.short_code
        baseOption.value = currency.short_code
        baseCurrency.appendChild(baseOption);

        const targetOption = baseOption.cloneNode(true)
        
        targetCurrency.appendChild(targetOption);


    });

    baseCurrency.value= "USD"
    targetCurrency.value = "KES"
}

convertBtn.addEventListener("click", (e) => {
    console.log("tester")
    e.preventDefault();

    fetch(`https://api.currencybeacon.com/v1/convert?from=${baseCurrency.value}&to=${targetCurrency.value}&amount=${inputAmount.value}&api_key=${accessToken}`)
        .then(response => response.json())
        .then(conversion => {
            console.log(conversion);
            document.getElementById("exact-target-figure").textContent = conversion.value.toFixed(2)
        })


})

