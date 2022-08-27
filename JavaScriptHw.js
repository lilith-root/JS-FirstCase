var number = prompt("Enter a number , please :" );
sum = 0;

while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
}
        if (sum % 2 == 0) {
            console.log("Even");

        }else{
            console.log("Odd");
        } 

