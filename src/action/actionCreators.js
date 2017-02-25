export const addQuote = (quote) => {
  return {
    type: 'ADD_QUOTE',
    quote //obj {text, author, tag, submittedBy}
  }
}

export const removeQuote = (id) => {
  return {
    type: 'REMOVE_QUOTE',
    id //remove by id
  }
}

export const updateQuote = (quote) => {
  return {
    type: 'UPDATE_QUOTE',
    quote //conditonal change by id only based on payload
  }
}
