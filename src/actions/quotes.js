// TODO: Create action creators as defined in tests

export const addQuote = quoteObj => {return {type: 'ADD_QUOTE', quote: quoteObj}}

export const removeQuote = id => {return {type: 'REMOVE_QUOTE', quoteId: id}}

export const upvoteQuote = id => ({type: 'UPVOTE_QUOTE', quoteId: id})

export const downvoteQuote = id => ({type: 'DOWNVOTE_QUOTE', quoteId: id})