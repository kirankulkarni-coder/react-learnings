import { useReducer } from "react";
import PostListContext from "./PostListContext";
import PostListReducer from "./PostListReducer";
import { useEffect } from "react";
import { useState } from "react";

const PostListProviderComponent = ({ children }) => {
  const [postList, dispatch] = useReducer(PostListReducer);

  return (
    <PostListContext.Provider value={{ postList, dispatch }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProviderComponent;
