function checkOddOrEven(number)
{
    if(number % 2 === 0)
    {
        return "Number is even";
    }
    else
    {
        return "Number is odd";
    }
}
let number = 3;
let result = checkOddOrEven();
console.log(result);
