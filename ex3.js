let matrix = [[1,4,5],[1,3,4],[2,6]]
let array = [1,4,5,1,3,4,2,6]


for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        console.log(matrix[i][j])
        array.push(matrix[i][j])
    }
}

function selectSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}

console.log(selectSort(array))