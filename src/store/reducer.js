export const LOAD_ALL = "LOAD";
export const DELETE = "DELETE";

const initialState = {
  loaded: false,
  loading: false,
  posts: []
};

const reducer = (state = initialState, action) => {
  const { type, ...payload } = action;

  switch (type) {
    case LOAD_ALL:
      return {
        ...state,
        loading: true
      };
    case `${LOAD_ALL}_SUCCESS`:
      return {
        ...state,
        loading: false,
        loaded: true,
        posts: payload.posts
      };
    case `${DELETE}_SUCCESS`:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== payload.id)
      };
    case `${LOAD_ALL}_FAILURE`:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    case `${DELETE}_FAILURE`:
    default:
      return state;
  }
};

export default reducer;
