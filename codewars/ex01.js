//Find the unique number 6kyu

const numbers = [0, 0, 1, 4]

const createDic = (arr) => {
  const map = Object.create(null)

 for (number of arr){
  if (map[number]) {
    map[number] += 1
  }
  else{
    map[number] = 1
  }
 }
  return map
}


const findUniq = (arr) => {
    const obj = createDic(arr)
    
    for (e in obj){
        if (obj[e] === 1){
            return parseFloat(e)
        }
    }

}

console.log(createDic(numbers))
// console.log(findUniq(numbers))