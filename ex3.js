function getRandom(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  } 

let month = getRandom(1,12)

console.log(month)
switch(Math.floor(month/3)){
    case 0 : {console.log('Зима'); break}
    case 4 : {console.log('Зима'); break}
    case 1 : {console.log('Весна'); break}
    case 2 : {console.log('Лето'); break}
    case 3 : {console.log('Осень'); break}
}

let years = getRandom(0, 2024)
console.log(years)

if(years % 4 == 0){console.log('Год високосный')}
else{console.log('Год не високосный')}