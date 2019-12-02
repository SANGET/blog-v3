function diagonalDifference(arr) {
  // Write your code here
  let res = 0;
  const arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    const row = arr[i];
    const currDiff = row[i] - row[row.length - i - 1];
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
    const stairCount = i + 1;
    const spaceCount = n - stairCount;
    const spaceStr = Array(spaceCount + 1).join(' ');
    const stairStr = Array(stairCount + 1).join('#');
    console.log(stairCount, spaceCount, `${spaceStr}${stairStr}`);
  }
}
staircase(10);

const str = '/2019/2019-03-24-React Table 固定列、固定表头的实现/';
const timeRegExp = /((19[2-9]\d{1})|(20\d{2}))-((0?[1-9])|(1[0-2]))-((0?[1-9])|([1-2][0-9])|30|31)-/;
const slugify = (str) => {
  const basePath = '/';
  const slugArr = str.split('/').filter((s) => !!s);
  let currSlug = slugArr[slugArr.length - 1];
  currSlug = currSlug.replace(timeRegExp, '');
  return `/${basePath}/${currSlug}`.replace(/\/\/+/g, '/');
};
const res = slugify(str);
console.log(res);
