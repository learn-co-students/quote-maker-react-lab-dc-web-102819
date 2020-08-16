export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quotes);
    case "UP_VOTING":
      return state.map(quote => {
        if(quote.id === action.quoteId){
          return {
            ...quote,
            vote:quote.vote += 1
          }
        }else{
          return quote
        }
      })
    case 'DOWN_VOTING':
      return state.map(quote => {
        if(quote.id === action.quoteId){
          return {
            ...quote,
            vote:quote.vote -= 1
          }
        }else{
          return quote
        }
      })
    case 'DELETE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    default:
      return state;
  }
};
