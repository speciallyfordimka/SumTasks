class MyString{
    reverse(string) {
        let newString = ''
        for(let i = string.length - 1; i >= 0; i--){
            newString += string[i]
        }
        return newString
    }

    ucFirst(string){
        return string.toUpperCase()[0] + string.slice(1, string.length)
    }

    ucWords(string){
        let newString = ''
        newString += string.toUpperCase()[0]
        for(let i = 1; i < string.length; i++){
            if(string[i - 1] == ' '){
                newString += string.toUpperCase()[i]
            }
            else{newString += string[i]}
        }
        return newString
    }
}


const str = new MyString()

console.log(str.reverse('new'))
console.log(str.ucFirst('new'))
console.log(str.ucWords('new word'))