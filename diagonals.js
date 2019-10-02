function diagonalDifference(arr) {
  // Write your code here
  let res = 0;
  let arrLen = arr.length;
  for(let i = 0; i < arrLen; i++) {
    let row = arr[i];
    let currDiff = row[i] - row[row.length - i - 1];
    res += currDiff;
  }
  return Math.abs(res);
}
diagonalDifference([
  [1, 2, 3, 2],
  [1, 2, 3, 3],
  [1, 2, 3, 5],
  [4, 2, 3, 1],
]);

function staircase(n) {
  for (let i = 0; i < n; i++) {
    let stairCount = i + 1;
    let spaceCount = n - stairCount;
    let spaceStr = Array(spaceCount + 1).join(' ');
    let stairStr = Array(stairCount + 1).join('#');
    console.log(stairCount, spaceCount, `${spaceStr}${stairStr}`);
  }
}
staircase(10);