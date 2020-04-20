export default function reducer (state = {
  isLoading: false,
}, action) {
  switch (action.type) {
    case "NOW_LOADING":
      return {
        ...state,
        isLoading: true,
      }
    case "LOADED":
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state;
  }
}