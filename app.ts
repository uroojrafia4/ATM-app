declare const Swal: any;



// Define the interface for a user
interface User {
    card: number;
    name: string;
    piN: number;
    amnt: number;
  }
  
  // Array of users
  const users: User[] = [
    { card: 123456, name: 'urooj', piN: 1234, amnt: 4000 },
    { card: 132456, name: 'abc', piN: 1214, amnt: 10000 },
    { card: 124356, name: 'xyz', piN: 1213, amnt: 400 },
    { card: 123546, name: 'pqr', piN: 1212, amnt: 500 },
    { card: 123465, name: 'mno', piN: 1211, amnt: 7000 },
  ];
  
  // Select DOM elements with proper typing
  let withdraw = document.getElementById('withdraw-btn') as HTMLButtonElement;
  
  let pinInput = document.getElementById('pin') as HTMLInputElement;
  let withdrawAmountInput = document.getElementById('amount') as HTMLInputElement;
  let cardNumberInput = document.getElementById('cardNumber') as HTMLInputElement;
  
  // Add event listener to the withdraw button
  withdraw.addEventListener('click', atm);
  
  function atm(): void {
    const pin = parseInt(pinInput.value);
    const withdrawAmount = parseInt(withdrawAmountInput.value);
    const cardNumber = parseInt(cardNumberInput.value);
  
    // Validate input fields
    if (!pinInput.value || !withdrawAmountInput.value || !cardNumberInput.value) {
      Swal.fire({
        icon: "error",
        title: "One of the field(s) is empty!",
      });
      return;
    }
  
    // Find the user based on the card number
    const iterate = users.find((user) => user.card === cardNumber);
  
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
        text: `You currently have only ${iterate.amnt} Rs. in your account!`,
      });
      return;
    }
  
    // Successful withdrawal
    iterate.amnt -= withdrawAmount;
    Swal.fire({
      icon: "success",
      title: `Dear ${iterate.name}, You have successfully withdrawn ${withdrawAmount} Rs.`,
      text: `Your remaining balance is ${iterate.amnt} Rs. Thanks for using our ATM service.`,
    });
  }
  