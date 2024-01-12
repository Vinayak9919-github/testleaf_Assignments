function calculateGrade(score)
{
    switch(true)
    {
        case (score > 90 && score === 100):
            return "A+ grade";
        case (score > 70 && score <= 90):
            return "A grade";
        case (score >= 60 && score <= 70):
            return "B grade";
        case (score < 60 && score >= 50):
            return "C grade";
        case (score < 50 && score >= 40):
            return "D grade";
        default:
            return "Failed";
    }
}
let grade = calculateGrade(10);
console.log("The grade secured is:",grade);
