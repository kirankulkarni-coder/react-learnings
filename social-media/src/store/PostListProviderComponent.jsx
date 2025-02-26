import { useReducer } from "react";
import PostListContext from "./PostListContext";
import PostListReducer from "./PostListReducer";

const DEFAULT_CONTEXT = [];

const PostListProviderComponent = ({ children }) => {
  const [postList, dispatch] = useReducer(PostListReducer, DEFAULT_CONTEXT);

  return (
    <PostListContext.Provider value={{ postList, dispatch }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProviderComponent;
