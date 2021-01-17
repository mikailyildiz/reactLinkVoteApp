import { ADD_LINK, DELETE_LINK, VOTE_LINK, SORT_LINK } from '../actions/types'
import md5 from 'md5'

export default (state = [], { type, payload }) => {
  switch (type) {
    case ADD_LINK:
      return [
        { ...payload, date: new Date(), id: md5(new Date()), vote: 0 },
        ...state,
      ]
    case DELETE_LINK:
      return state.filter((link) => link.id !== payload.id)
    case VOTE_LINK:
      return state.map((link) => {
        if (link.id !== payload.id) return link

        link.date = new Date()
        if (payload.type === 'up') link.vote++
        else link.vote--

        return link
      })
    case SORT_LINK:
      return state.sort((a, b) => {
        if (a.vote === b.vote) {
          return new Date(b.date) - new Date(a.date)
        } else {
          if (payload.orderBy === 'MostVote') return b.vote - a.vote
          else if (payload.orderBy === 'LessVote') return a.vote - b.vote
        }
      })

    default:
      return state
  }
}
