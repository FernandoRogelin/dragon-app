export default function reducerDragon(state, action) {
  switch (action.type) {
    case "SET_DRAGON_LIST":
      return { dragons: action.payload, loading: action.loading };
    case "SET_LOADING":
      return { ...state, loading: action.loading };
    default:
      return state;
  }
}
