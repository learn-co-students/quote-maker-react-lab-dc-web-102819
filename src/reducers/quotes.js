// import uuid from "uuid"

export default (state = [], action) => {
  let index = state.findIndex(quote => quote.id === action.quoteId);
  switch (action.type) {

    case 'ADD_QUOTE':
      return [...state, {id: action.quote.id, content: action.quote.content, author: action.quote.author, votes: 0}]

    case 'REMOVE_QUOTE':
      return [...state.slice(0, index), ...state.slice(index + 1)]

    case 'UPVOTE_QUOTE':
      debugger
      return state.map((quote, idx) => idx === index ? {...quote, votes: quote.votes + 1} : quote)

    case 'DOWNVOTE_QUOTE':
        return state[index].votes < 1 ? 
          state :
          state.map((quote, idx) => idx === index ? {...quote, votes: quote.votes - 1} : quote)

    default: 
      return state
  }
}

