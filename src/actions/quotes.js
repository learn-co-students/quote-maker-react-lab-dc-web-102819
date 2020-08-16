// TODO: Create action creators as defined in tests

export const addQuote = (quoteObj) =>{
    return {type:'ADD_QUOTE', quotes : quoteObj}
}

//removing, upvoting and downvoting quotes
export const upVoting = (quoteId) =>{
    return {type:'UP_VOTING', quoteId }
}

export const downVoting = (quoteId) =>{
    return {type:'DOWN_VOTING', quoteId }
}

export const deleteQuote = (quoteId) =>{
    return {type:'DELETE_QUOTE', quoteId }
}
