
const donationButtons = document.querySelectorAll('[data-donation-amount]') // find alle elementer som har data-donation-amount attributten. De kommer tilbage som et array af elementer (da jeg kalder queryselectorAll) den tager det inden fra mit html som også er det man kalder DOM (Document object Model) 
const donationInfo = document.querySelector("#donationInfo")
const donationInput = document.querySelector('#donationAmountInput')

const priceFoodOneCat = 20
const pricePerVaccine = 13

// Dette er et for loop
for (let button of donationButtons) {
    // For hver knap vil jeg gerne lytte på hvornår de bliver trykket på og det gør man på et element .addEventListener (click) 
    button.addEventListener("click", () => {
        donationInput.value = button.getAttribute("data-donation-amount")
        onDonationChanged(donationInput)
        // Jeg kalder det onDonationChanged fordi jeg har ændret værdien af input feltet til knappens værdi, så den kan opdatere de aktive knapper og teksten så det passer med den nye værdi i feltet (tekst feltet)
    })
}


function onDonationChanged(inputElement) {
    updateDonationButtonsActive(inputElement)
    updateDonationText(inputElement)
}

function updateDonationButtonsActive(inputElement) {
    for (let button of donationButtons) {
        // for hver knap i array donationbuttons. 
        let btnAmount = button.getAttribute("data-donation-amount") // her finder jeg udaf hvilket amount der er på knappen, altså jeg henter værdien af den attribut.

        if (inputElement.value == btnAmount) { // hvis værdien af InputElementet er det samme som btnAmount
            button.classList.add("active") // vi tilføjer en klasse (active) til button elementet
        } else {
            button.classList.remove("active") // gør det modsatte
        }
    }
}

function updateDonationText(inputElement) { // Denne funktion opdaterer donationsteksten baseret på værdien fra det inputElement den modtagere 
    let catsFed = inputElement.value / priceFoodOneCat // Beregner hvor mange katte der kan fodres, baseret på den indtastede værdi divideret med prisen for mad til én kat
    let catsVaccinated = inputElement.value / pricePerVaccine // det samme her

    if (inputElement.value == "") { // == sammenligner værdien, er værdien tom
        //  Går til at hjælpe familieløse katte". Dette er en generel tekst, der vises, når brugeren ikke har indtastet noget beløb.
        donationInfo.textContent = "Går til at hjælpe familieløse katte"
    } else {
        // Opdaterer tekst elementet og viser hvor mange katte der kan fodres (catsFed) eller vaccineres (catsVaccinated) for det indtastede beløb.
        donationInfo.textContent = `Går til at fodre ${catsFed.toFixed(0)} katte eller vaccinere ${catsVaccinated.toFixed(0)} katte` // toFixed runder tallet til et helt tal (uden decimaler)
    }
}

