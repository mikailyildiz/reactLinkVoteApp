import { ADD_LINK, DELETE_LINK, VOTE_LINK, SORT_LINK } from './types'

export function onNewLink(data) {
  return (dispatch) => {
    dispatch({
      type: ADD_LINK,
      payload: data,
    })
  }
}

export function onDeleteLink(id) {
  return (dispatch) => {
    dispatch({
      type: DELETE_LINK,
      payload: { id },
    })
  }
}

export function onVoteLink(id, type, orderBy) {
  return (dispatch) => {
    dispatch({
      type: VOTE_LINK,
      payload: { id, type, orderBy },
    })
    dispatch(onSortingLink(orderBy))
  }
}

export function onSortingLink(orderBy) {
  return (dispatch) => {
    dispatch({
      type: SORT_LINK,
      payload: { orderBy },
    })
  }
}
