function towerBuilder(nFloors) {
  arr = new Array();
  str = "*";
  j = 1;

  for (let i = 1; i <= nFloors; i++) {
    arr.push(str.repeat(j));
    j = j + 2;
  }
  return arr
}

// [ '*', '***' ]
// [ ' * ', ' *** ' ]