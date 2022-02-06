import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceHolder";

const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, "userId"));

  userIds.forEach((userId) => dispatch(fetchUser(userId)));
};

const fetchPosts = () => async (dispatch, getState) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

const fetchUser = (userId) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
};

export { fetchPosts, fetchUser, fetchPostsAndUsers };

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

// with promise chain
/* 
const fetchUsers = () => (dispatch) => {
  const getUsers = () => {
    return jsonPlaceholder.get("/users");
  };

  return getUsers().then((res) =>
    dispatch({
      type: "FETCH_USERS",
      payload: res.data,
    })
  );
};
*/

// const fetchUser = function (userId) {
//   return _.memoize(async function (dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${userId}`);
//     dispatch({
//       type: "FETCH_USER",
//       payload: response.data,
//     });
//   });
// };

/* Prevent too much request with the help of lodash memoize */
/* 
const fetchUser = (userId) => (dispatch) => {
  _fetchUser(userId, dispatch);
};

const _fetchUser = _.memoize(async (userId, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${userId}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
});
*/
/* Prevent too much request with the help of lodash memoize */
