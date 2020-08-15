export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quotes);
    case "UP_VOTING":
      console.log("aaefwafeff")
      // state.map(quote => {
      //   if(quote.id === action){
      //     return {...state, vote:state.vote + 1}
      //   }else{
      //     return quote
      //   }
      // })
      return state
    default:
      return state;
  }
};
