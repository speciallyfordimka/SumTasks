let object = {
    a: 1,
    b: 2
}

function convert(object){
    let array = []

    for(key in object){
        array.push([key, object[key]])
    }

    return array
}

console.log(convert(object))