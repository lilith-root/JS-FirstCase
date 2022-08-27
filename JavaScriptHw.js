number = prompt("Please enter a number :");
let sum = 0;


while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);


    function isoddOrEvenish(number){
        if (sum % 2 == 0) {
            console.log("Even");

        }else{
            console.log("Odd");
        } 
    }
}


isoddOrEvenish(number)
