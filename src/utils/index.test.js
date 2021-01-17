import { PAGE_SIZE, sliceItems, generatePagination } from '.'

const generateArray = (count, counter = 1) => {
  return Array.from(Array(count), (x, i) => i + counter)
}

const sampleItemCount = 50
const sampleItems = generateArray(sampleItemCount)
const samplePageCount = Math.ceil(sampleItemCount / PAGE_SIZE)

describe('Unit test - Utils', () => {
  test.each(generateArray(samplePageCount))(
    `Slice items ${sampleItemCount} of page %s`,
    (page) => {
      const counter = (page - 1) * PAGE_SIZE + 1
      const result = generateArray(PAGE_SIZE, counter)
      expect(sliceItems(sampleItems, PAGE_SIZE, page)).toEqual(result)
    }
  )

  test('Generate pagination page 1, 5, 9', () => {
    let result = [1, 2, 3, 4, 5]
    expect(generatePagination(sampleItems, PAGE_SIZE, 1)).toEqual(result)
    result = [3, 4, 5, 6, 7]
    expect(generatePagination(sampleItems, PAGE_SIZE, 5)).toEqual(result)
    result = [6, 7, 8, 9, 10]
    expect(generatePagination(sampleItems, PAGE_SIZE, 9)).toEqual(result)
  })
})
