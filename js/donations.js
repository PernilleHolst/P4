
const donationButtons = document.querySelectorAll('[data-donation-amount]')
const donationInfo = document.querySelector("#donationInfo")
const priceFoodOneCat = 20
const pricePerVaccine = 13

function onDonationChanged(el) {
    for (let btn of donationButtons) {
        let btnAmount = btn.getAttribute("data-donation-amount")
        if (el.value == btnAmount) {
            btn.classList.add("active")
        } else {
            btn.classList.remove("active")
        }
    }

    let catsFed = el.value / priceFoodOneCat
    let catsVaccinated = el.value / pricePerVaccine

    if (el.value == "") {
        donationInfo.textContent = "Går til at hjælpe familieløse katte"
    } else {
        donationInfo.textContent = `Går til at fodre ${catsFed.toFixed(0)} katte eller vaccinere ${catsVaccinated.toFixed(0)} katte`
    }

}

donationButtons.forEach(el => {
    el.addEventListener("click", () => {
        const donationInput = document.querySelector('#donationAmountInput')
        donationInput.value = el.getAttribute("data-donation-amount")
        onDonationChanged(donationInput)
    })
})