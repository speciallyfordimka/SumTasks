let string = 'DDADSADASDAAADS'
let symbols = ''

for (let i = 0; i < string.length; i++){
    if (!symbols.includes(string[i])){
        symbols += string[i]
    }
}

console.log(symbols)