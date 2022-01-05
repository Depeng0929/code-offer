// 二维数组，每一行从左到右依次递增，每一列从上到下递增，给定一个整数，判断是否包含在二维数组中

import { it,expect,describe } from "vitest"

function find(arr: number[][], n: number) {

}

describe('find', () => {
  it('[]', () => {
    expect(find([], 1)).toEqual(false)
    expect(
      find([[1, 2, 7, 8, 9], [2, 4, 6, 8, 10], [3, 5, 7, 9, 11], [1, 3, 5, 7, 9], [2, 4, 6, 8, 10]], 8)).toEqual(true)
  })
})
