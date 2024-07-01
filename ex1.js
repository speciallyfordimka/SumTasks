let countDivisor = true

for(let i = 1; i < 100; i++){
    if(i == 1||i == 2){console.log(i); continue}
    for(let j = 2; j < i; j++){
        if(i % j == 0){
            countDivisor = false
        }
        if(!countDivisor){break}
    }
    if(countDivisor){console.log(i)}
    countDivisor = true
}