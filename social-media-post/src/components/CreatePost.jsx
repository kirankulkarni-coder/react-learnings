import { useContext, useRef } from "react";
import styles from "../css/CreatePost.module.css";
import PostListContext from "../store/PostListContext";

const CreatePost = () => {
  const { dispatch } = useContext(PostListContext);

  const title = useRef("");
  const body = useRef("");
  const reactions = useRef("");
  const userid = useRef("");
  const tags = useRef("");

  const addPost = (data) => {
    dispatch({
      type: "ADD_POST",
      payload: data,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    let formData = {};
    formData.id = 3;
    formData.title = title.current.value;
    formData.body = body.current.value;
    formData.reactions = {
      likes: reactions.current.value,
      dislikes: reactions.current.value,
    };
    formData.userId = userid.current.value;
    formData.tags = tags.current.value.split(" ");

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => addPost(res));
  };

  return (
    <form className={styles.form_createpost} onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputTitle1" className="form-label">
          Title
        </label>
        <input
          ref={title}
          type="text"
          className="form-control"
          id="exampleInputTitle1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputBody1" className="form-label">
          Body
        </label>
        <input
          ref={body}
          type="text"
          className="form-control"
          id="exampleInputBody1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputReactions1" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          ref={reactions}
          className="form-control"
          id="exampleInputReactions1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputUserID1" className="form-label">
          User ID
        </label>
        <input
          ref={userid}
          type="text"
          className="form-control"
          id="exampleInputUserID1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputTags1" className="form-label">
          Tags
        </label>
        <input
          ref={tags}
          type="text"
          className="form-control"
          id="exampleInputTags1"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
