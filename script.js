const accessToken = "d68c997763cf20f8cb34f586";
const baseCurrency = document.getElementById("Base-currency")
const targetCurrency = document.getElementById("Target-currency")
const convertBtn = document.getElementById("convert-btn")
const inputAmount = document.getElementById("exact-base-figure")

document.addEventListener("DOMContentLoaded", (e) => {


    fetch(`https://v6.exchangerate-api.com/v6/${accessToken}/codes`)

        .then(response => {
            console.log(response);
            if (response.status != 200) {
                alert("Failed to connect. Try again later.")
            }
            return response.json()
        })
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

    currencies["supported_codes"].forEach(currency => {
        const baseOption = document.createElement("option")
        baseOption.textContent = currency[1]
        baseOption.value = currency[0]
        baseCurrency.appendChild(baseOption);

        const targetOption = baseOption.cloneNode(true)

        targetCurrency.appendChild(targetOption);


    });

    baseCurrency.value = "USD"
    targetCurrency.value = "KES"
}

convertBtn.addEventListener("click", (e) => {
    console.log("tester")
    e.preventDefault();

    fetch(`https://v6.exchangerate-api.com/v6/${accessToken}/pair/${baseCurrency.value}/${targetCurrency.value}/${inputAmount.value}`)

        .then(response => response.json())
        .then(conversion => {
            console.log(conversion);
            document.getElementById("exact-target-figure").textContent = conversion["conversion_result"].toFixed(2)
        })


})

// d68c997763cf20f8cb34f586
