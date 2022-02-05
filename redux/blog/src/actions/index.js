import jsonPlaceholder from "../apis/jsonPlaceHolder";

/*
const fetchPosts = () => {
  // Bad approach
  // const response = await jsonPlaceHolder.get("/posts");
  //should return plain js obj
  return {
    type: "FETCH_POSTS",
    payload: response,
  };
};
*/

const fetchPosts = () => async (dispatch, getState) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export { fetchPosts };
