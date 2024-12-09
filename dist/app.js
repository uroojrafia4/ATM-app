"use strict";
// Array of users
var users = [
    { card: 123456, name: 'urooj', piN: 1234, amnt: 4000 },
    { card: 132456, name: 'abc', piN: 1214, amnt: 10000 },
    { card: 124356, name: 'xyz', piN: 1213, amnt: 400 },
    { card: 123546, name: 'pqr', piN: 1212, amnt: 500 },
    { card: 123465, name: 'mno', piN: 1211, amnt: 7000 },
];
// Select DOM elements with proper typing
var withdraw = document.getElementById('withdraw-btn');
var pinInput = document.getElementById('pin');
var withdrawAmountInput = document.getElementById('amount');
var cardNumberInput = document.getElementById('cardNumber');
// Add event listener to the withdraw button
withdraw.addEventListener('click', atm);
function atm() {
    var pin = parseInt(pinInput.value);
    var withdrawAmount = parseInt(withdrawAmountInput.value);
    var cardNumber = parseInt(cardNumberInput.value);
    // Validate input fields
    if (!pinInput.value || !withdrawAmountInput.value || !cardNumberInput.value) {
        Swal.fire({
            icon: "error",
            title: "One of the field(s) is empty!",
        });
        return;
    }
    // Find the user based on the card number
    var iterate = users.find(function (user) { return user.card === cardNumber; });
    if (!iterate) {
        Swal.fire({
            icon: "error",
            title: "No card number found",
            text: "The card number must be 6 digits long.",
        });
        return;
    }
    // Check if the entered PIN is correct
    if (iterate.piN !== pin) {
        Swal.fire({
            icon: "error",
            title: "The PIN is incorrect",
            text: "Ensure the PIN you are entering is exactly 4-digits long.",
        });
        return;
    }
    // Check if the withdrawal amount exceeds the balance
    if (withdrawAmount > iterate.amnt) {
        Swal.fire({
            icon: "error",
            title: "Insufficient balance!",
            text: "You currently have only ".concat(iterate.amnt, " Rs. in your account!"),
        });
        return;
    }
    // Successful withdrawal
    iterate.amnt -= withdrawAmount;
    Swal.fire({
        icon: "success",
        title: "Dear ".concat(iterate.name, ", You have successfully withdrawn ").concat(withdrawAmount, " Rs."),
        text: "Your remaining balance is ".concat(iterate.amnt, " Rs. Thanks for using our ATM service."),
    });
}
