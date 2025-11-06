const Num = +prompt("Enter Num: ")
let prime = true
for(let i =2; i<=Math.sqrt(Num); i++)
{
    if (Num % i === 0){
        prime = false
        break
    }
}
alert(Num > 1 && prime ? "Просте" : "Складне");
