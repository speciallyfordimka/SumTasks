let arrayNums = [1,2,3,6,8,1,6,3,2,1,0,4]
let arrayWords = ['one', 'two', 'three']

function bubbleSort(array) {
    for (let i = array.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (array[j] > array[j + 1]) {
          let replace = array[j];
          array[j] = array[j + 1];
          array[j + 1] = replace;
        }
      }
    }
    return array
  }

  console.log(bubbleSort(arrayNums).concat(arrayWords))