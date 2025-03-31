document.addEventListener('DOMContentLoaded', function () {
    const amountButtons = document.querySelectorAll('.amount-options button');
    const customAmountInput = document.querySelector('.custom-amount input');


    amountButtons.forEach(button => {
        button.addEventListener('click', function () {
            amountButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            customAmountInput.value = '';
        });
    });

    customAmountInput.addEventListener('input', function () {
        amountButtons.forEach(btn => btn.classList.remove('active'));
    });
});