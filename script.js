function isLuhnValid(cardNumber) {
    cardNumber = cardNumber.replace(/\D/g,'');
    let sum = 0;
    let doubleUp = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i), 10);
        if (doubleUp) {
            digit *=2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        doubleUp = !doubleUp;
    }

    return (sum % 10) ===0;

}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const creditdebitInput = form.querySelector("input[name='creditdebit']");
    const submitButton = form.querySelector("button[type='submit']");

    form.addEventListener("submit", function(e) {
        const cardNumber = creditdebitInput.value;
        if (!isLuhnValid(cardNumber)) {
            alert("Invalid Credit/Debit Card Number. Please check and try again.");
            e.preventDefault(); // Prevent the form from submitting
        }
    });
});