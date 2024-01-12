function checkNumberType(number)
{
    if(number > 0)
    {
        return "number is greater than 0";
    }
    else if(number < 0)
    {
        return "number is less than 0";
    }
    else
    {
        return "number is equal to 0";
    }
}

let number = 55;
let result = checkNumberType(number);
console.log(result);
