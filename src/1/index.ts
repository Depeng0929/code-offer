// 3. 在一个长度为n的数组中的所有数字都在0-(n-1)，找到重复
// [2, 3, 1, 0, 2, 5, 3]
function duplicate(arr: number[]) {
  const len = arr.length
  if (len === 0) return false
  // find invalid value
  for (let i = 0; i < len; i++)
    if (arr[i] < 0 || arr[i] > len - 1) return false

  for (let i = 0; i < len; i++) {
    while (i !== arr[i]) {
      if (arr[i] === arr[arr[i]])
        return arr[i]

      else swap(arr, arr[i], arr[arr[i]])
    }
  }

  function swap(arr: number[], i: number, j: number) {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
}
console.log(duplicate([4, 3, 1, 0, 2, 5, 3]))
