
const natureReducer = (state, action) => {
  switch (action.type) {
    case "nature":
        console.log(state)
      return {
        ...state,
        nature: action.payload,
      }
    default:
      return state
  }
};

export default natureReducer;