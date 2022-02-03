import jsonPlaceHolder from "../apis/jsonPlaceHolder";

const fetchPosts = async () => {
  // Bad approach
  const response = await jsonPlaceHolder.get("/posts");
  return {
    type: "FETCH_POSTS",
    payload: response,
  };
};

export { fetchPosts };
