import { useReducer } from "react";
import PostListContext from "./PostListContext";
import PostListReducer from "./PostListReducer";
import { useEffect } from "react";
import { useState } from "react";

const DEFAULT_CONTEXT = [];

const PostListProviderComponent = ({ children }) => {
  const [postList, dispatch] = useReducer(PostListReducer, DEFAULT_CONTEXT);
  const [fetching, setFetching] = useState(false);

  const addInitialPosts = (data) => {
    dispatch({
      type: "ADD_INITIAL_POSTS",
      payload: data,
    });
  };

  const getInitialPosts = () => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data);
        setFetching(false);
      });
  };

  useEffect(getInitialPosts, []);

  return (
    <PostListContext.Provider value={{ postList, dispatch, fetching }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProviderComponent;
