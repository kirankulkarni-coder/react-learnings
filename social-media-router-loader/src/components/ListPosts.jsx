import { useContext, useEffect, useState } from "react";
import styles from "../css/ListsPosts.module.css";
import PostListContext from "../store/PostListContext";
import { AiTwotoneDelete } from "react-icons/ai";
import WelcomeMessage from "./WelcomeMessage";
import Loader from "./Loader";
import { useLoaderData } from "react-router-dom";

export const getInitialPosts = () => {
  return fetch("https://dummyjson.com/posts").then((res) =>
    res.json().then((data) => {
      return data.posts;
    })
  );
};

const ListPosts = () => {
  const { dispatch } = useContext(PostListContext);
  const postList = useLoaderData();

  const handleDelete = (item) => {
    console.log(item);
    dispatch({
      type: "DELETE_POST",
      payload: item,
    });
  };

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.length > 0 &&
        postList.map((item) => (
          <div
            key={item.id}
            className={`card ${styles.card_container}`}
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.body}</p>
              {item.tags.map((tag) => (
                <span
                  key={tag + item.id}
                  className={`badge text-bg-primary ${styles.badge_list}`}
                >
                  {tag}
                </span>
              ))}
              <div
                className={`alert alert-success ${styles.alert_container}`}
                role="alert"
              >
                Number of people reacted {item.reactions.likes}
              </div>
            </div>
            <span
              onClick={() => handleDelete(item)}
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              <AiTwotoneDelete />
            </span>
          </div>
        ))}
    </>
  );
};

export default ListPosts;
