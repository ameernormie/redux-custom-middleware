export const INITIAL_STATE = {
  loading: false,
  error: null,
  todos: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TODOS_REQUEST":
      return { ...state, loading: true };
    case "TODOS_ERROR":
      return { ...state, loading: false, error: action.error };
    case "TODOS_RESPONSE":
      return { ...state, loading: false, todos: action.todos };
    default:
      return state;
  }
};

export default reducer;
