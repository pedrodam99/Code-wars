// Split Strings
function solution(str) {
  const newArr = [];
  let arrString = str;

  if (arrString.length % 2 == 0) {
    for (let i = 0; i < arrString.length; i = i + 2) {
      const first = arrString[i];
      const second = arrString[i + 1];
      newArr.push(first + second);
    }
  } else {
    arrString = arrString + "_";
    for (let i = 0; i < arrString.length; i = i + 2) {
      const first = arrString[i];
      const second = arrString[i + 1];
      newArr.push(first + second);
    }
  }
  return newArr;
}

// solution("abcdefg");
console.log(solution("abcdef"));