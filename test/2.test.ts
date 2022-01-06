// 二维数组，每一行从左到右依次递增，每一列从上到下递增，给定一个整数，判断是否包含在二维数组中

import { it,expect,describe } from "vitest"

function find(arr: number[][], n: number) {

  let rows = arr.length
  let cols = rows && arr[0].length
  if (rows > 0 && cols > 0) { 

    let row = 0;
    let col = cols-1;

    while (row < rows && col > 0) {
      if (arr[row][col] === n) {
        return true
      } else if (arr[row][col] > n) {
        col--
      } else {
        row++
      }
    }
  }
  return false

}

describe('find', () => {
  it('[]', () => {
    expect(find([], 1)).toEqual(false)
    expect(
      find([[1, 2, 7, 8, 9], [2, 4, 6, 8, 10], [3, 5, 7, 9, 11], [1, 3, 5, 7, 9], [2, 4, 6, 8, 10]], 8)).toBeTruthy()
    
      expect(
        find([[1, 2, 7, 8, 9], [2, 4, 6, 8, 10], [3, 5, 7, 9, 11], [1, 3, 5, 7, 9], [2, 4, 6, 8, 10]], 20)).toBeFalsy()
  })

  
})
