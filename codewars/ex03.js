// Two Sum

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return Array(i, j);
      }
    }
  }
  return Array();
}

console.log(twoSum([1, 2, 2], 4))