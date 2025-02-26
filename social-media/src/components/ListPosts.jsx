import { useContext, useEffect, useState } from "react";
import styles from "../css/ListsPosts.module.css";
import PostListContext from "../store/PostListContext";
import { AiTwotoneDelete } from "react-icons/ai";
import WelcomeMessage from "./WelcomeMessage";
import Loader from "./Loader";

const ListPosts = () => {
  const { postList, dispatch } = useContext(PostListContext);
  const [fetching, setFetching] = useState(false);

  const handleDelete = (item) => {
    console.log(item);
    dispatch({
      type: "DELETE_POST",
      payload: item,
    });
  };

  const addInitialPosts = (data) => {
    dispatch({
      type: "ADD_INITIAL_POSTS",
      payload: data,
    });
  };

  const getInitialPosts = () => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data);
        setFetching(false);
      });

    return () => {
      console.log("Called Cleanup");
      controller.abort();
    };
  };

  useEffect(getInitialPosts, []);

  return (
    <>
      {fetching && <Loader />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching &&
        postList.length > 0 &&
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
