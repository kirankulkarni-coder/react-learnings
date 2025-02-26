import { createContext } from "react";

const PostListContext = createContext({
  postList: [],
  addIntialPost: () => {},
  addPost: () => {},
  deletePost: () => {},
});

export default PostListContext;
