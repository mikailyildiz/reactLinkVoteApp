export const PAGE_SIZE = 5
export const SORT_LIST = [
  {
    text: 'Order By (Default)',
    value: '',
  },
  {
    text: 'Vote (Most Voted)',
    value: 'MostVote',
  },
  {
    text: 'Vote (Less Voted)',
    value: 'LessVote',
  },
]

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    return false
  }
}

export const sliceItems = (array, pageSize, pageNumber) => {
  try {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
  } catch (error) {
    return array
  }
}

export const generatePagination = (data, pageSize, pageNumber) => {
  try {
    const items = []
    let pageCount = Math.ceil(data.length / pageSize)
    if (pageCount < 2) return []

    let counter = 0
    let startCount = 1

    if (pageNumber >= 3) startCount = pageNumber - 2
    if (pageCount >= 5 && pageCount - startCount < 5) startCount = pageCount - 4

    for (let i = startCount; i < pageCount + 1; i++) {
      if (counter >= 5) break

      items.push(i)
      counter++
    }
    return items
  } catch (error) {
    return []
  }
}
