import { expect, it, describe } from 'vitest'

// 在一个长度为n的数组中所有数字都在0～n-1的范围内，找出数组中任意一个重复的数字。
// 解法1: 字典，时间复杂度O(n)，空间复杂度O(n)
// 解法2: 排序，时间复杂度O(nlogn)，空间复杂度O(1)

// 解法3: 如下
function duplicate(arr: number[]) {
  const len = arr.length
  if (!len) return false
  
  for(let i = 0; i < len; i++) {
    if (arr[i] < 0 || arr[i]> len - 1) {
      return false
    }
  }

  for (let i = 0; i < len; i++) { 
    while (arr[i] !== i) {
      if(arr[i] === arr[arr[i]]) {
        return arr[i]
      }
      const temp = arr[i]
      arr[i] = arr[temp]
      arr[temp] = temp
    }
  }
  return false
}
console.log(duplicate([2,3,1,0,2,5,3]))


describe('duplicate', () => {

  it('[2, 3, 1, 0, 2, 5, 3]', () => {
    expect(duplicate([2, 3, 1, 0, 2, 5, 3])).toBe(2)
  })

  it('[]', () => {
    expect(duplicate([])).toBeFalsy()
  })

  it('[-1]', () => { 
    expect(duplicate([-1])).toBeFalsy()
  })

  it('[100]', () => {
    expect(duplicate([100])).toBeFalsy()
  })
})
