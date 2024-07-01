let startArray = [6,1,7,3,5,8,0,-1,3,2,4,5]

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

let endArray = selectSort(startArray)

let searchNum = 0
low = 0
high = endArray.length - 1

while(low <= high){
    let mid = Math.floor((low + high)/2)
    let num = endArray[mid]
    if(num == searchNum){console.log(mid)}
    if(num > searchNum){high = mid - 1}
    else{low = mid + 1}
}

console.log(endArray)
