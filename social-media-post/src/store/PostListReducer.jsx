const PostListReducer = (postList, action) => {
  switch (action.type) {
    case "ADD_INITIAL_POSTS":
      return action.payload.posts;
    case "ADD_POST":
      return [action.payload, ...postList];
    case "DELETE_POST":
      let newList = [...postList];
      return newList.filter((item) => item.id != action.payload.id);
  }
  return postList;
};

export default PostListReducer;
