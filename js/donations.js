
const donationButtons = document.querySelectorAll('[data-donation-amount]')
const donationInfo = document.querySelector("#donationInfo")
const donationInput = document.querySelector('#donationAmountInput')

const priceFoodOneCat = 20
const pricePerVaccine = 13

for (let button of donationButtons) {
    button.addEventListener("click", () => {
        donationInput.value = button.getAttribute("data-donation-amount")
        onDonationChanged(donationInput)
    })
}


function onDonationChanged(inputElement) {
    updateDonationButtonsActive(inputElement)
    updateDonationText(inputElement)
}

function updateDonationButtonsActive(inputElement) {
    for (let button of donationButtons) {
        let btnAmount = button.getAttribute("data-donation-amount")

        if (inputElement.value == btnAmount) {
            button.classList.add("active")
        } else {
            button.classList.remove("active")
        }
    }
}

function updateDonationText(inputElement) {
    let catsFed = inputElement.value / priceFoodOneCat
    let catsVaccinated = inputElement.value / pricePerVaccine

    if (inputElement.value == "") {
        donationInfo.textContent = "Går til at hjælpe familieløse katte"
    } else {
        donationInfo.textContent = `Går til at fodre ${catsFed.toFixed(0)} katte eller vaccinere ${catsVaccinated.toFixed(0)} katte`
    }
}
