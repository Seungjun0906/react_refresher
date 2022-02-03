const fetchPosts = () => {
  // Bad approach
  // const response = await jsonPlaceHolder.get("/posts");
  //should return plain js obj
  return {
    type: "FETCH_POSTS",
    payload: response,
  };
};

export { fetchPosts };
