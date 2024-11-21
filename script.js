document.querySelector(".payment-form").addEventListener("submit", function(e) {
    const paymentMethod = document.getElementById("payment-method").value;
    if (!paymentMethod) {
        e.preventDefault();
        alert("Please select a payment method.");
    }
});
