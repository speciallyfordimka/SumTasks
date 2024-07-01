let strings = ['дим', 'манек', 'рота']

for(let i = 0; i < strings.length; i++){
    for (let j = strings[i].length - 2; j >= 0; j--){
        strings[i] += (strings[i])[j]
    }
}

console.log(strings)