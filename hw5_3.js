const N = prompt("Enter N: ")
for(let i = 1; i<=100; i++){
    
    if (i**2 >= N){
        break
    }
    console.log(i);
}