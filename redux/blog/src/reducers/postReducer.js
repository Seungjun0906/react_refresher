/* 
const postReducer = (prevState = [], action) => {
  if (action.type === "FETCH_POSTS") {
    return action.payload;
  }

  return prevState;
};
*/

//with swtich
const postReducer = (prevState = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;

    default:
      return prevState;
  }
};

export default postReducer;
