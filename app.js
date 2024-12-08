
// array of users, each user will be an object in an array , user's name, pin , card , balance.
const users = [
  { card : 123456 , name : 'urooj', piN  :1234, amnt : 4000 ,},
  { card : 132456 , name : 'abc' , piN   :1214, amnt : 10000 ,},
  { card : 124356 , name : 'xyz' , piN   :1213, amnt : 400 ,},
  { card : 123546 , name : 'pqr' , piN   :1212, amnt : 500 ,},
  { card : 123465 , name : 'mno' , piN   :1211, amnt : 7000 ,},
];
// let userName = document.getElementById('name');
// let balance = document.getElementById('balance');


let withdraw = document.getElementById('withdraw-btn');


let pinInput = document.getElementById('pin');
let withdrawAmountInput = document.getElementById('amount');
let cardNumberInput = document.getElementById('cardNumber');

// Keep references to input elements and parse their values when needed
withdraw.addEventListener('click', atm);

function atm() {
    // Parse values inside the function
   let pin = parseInt(pinInput.value);
    let withdrawAmount = parseInt(withdrawAmountInput.value);
    let cardNumber = parseInt(cardNumberInput.value);

    // Check for empty fields
    if (!pinInput.value || !withdrawAmountInput.value || !cardNumberInput.value) {
        Swal.fire({
            icon: "error",
            title: "One of the field(s) is empty!",
        });
        return;
    }   
    // if(pinInput.value.length !== 4){
        
    //         Swal.fire({
    //             icon: "error",
    //             title: "The pin should be 4-digit long",
    //             });
    //             return
        
    // }
    // if(cardNumberInput.value.length !== 6 ){
    //     Swal.fire({
    //         icon: "error",
    //         title: "The cardNumber should be 6-digit long",
    //         });
    //         return
    // }
    let iterate = users.find(user => user.card == cardNumber)

    if (!iterate){
        Swal.fire({
            icon: "error",
            title: "no card number found",
            text: 'the card number must be 6 digits long.'
            });
            return
    }

    if(iterate.piN !== pin){
        Swal.fire({
            icon: "error",
            title: "the pin is incorrect",
            text: 'Ensure the pin you are entering is exactly 4-digits long.'
            });
            return
    }
    if(withdrawAmount > iterate.amnt){
        Swal.fire({
            icon: "error",
            title: "Insufficient balance!",
            text: `You currently have only ${iterate.amnt} Rs. in your account! `
            });
            return
    }
    if(iterate.card && iterate.piN === pin){
        iterate.amnt = iterate.amnt - withdrawAmount ;
        Swal.fire({
            icon: "success",
            title: `Dear ${iterate.name},You have successfully withdrawn ${withdrawAmount} Rs. `,
            text: `Your remaining balance is ${iterate.amnt} Rs.,  Thanks for using our ATM service.`
            });
    }

   
}



  

