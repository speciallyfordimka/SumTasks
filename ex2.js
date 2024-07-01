let string = 'hello alexandr!'
let final_string = ''
let symbol
let i = 0

while(i < string.length){
    if(string[i] != ' '){
        symbol = string[i]
        while((string[i] != ' ') && (i < string.length)){
            final_string += symbol
            i++
        }
    }
    final_string += ' '
    i++
}

console.log(final_string)