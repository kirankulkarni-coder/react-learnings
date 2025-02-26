import { useContext, useRef } from "react";
import styles from "../css/CreatePost.module.css";
import PostListContext from "../store/PostListContext";
import { Form, redirect, useNavigate } from "react-router-dom";

export async function handleOnSubmit(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);

  postData.reactions = {
    likes: postData.reactions,
    disLikes: postData.reactions,
  };

  postData.tags = postData.tags.split(" ");

  const returnData = await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  }).then((res) => res.json());

  return redirect("/");
}

const CreatePost = () => {
  return (
    <Form method="POST" className={styles.form_createpost}>
      <div className="mb-3">
        <label htmlFor="exampleInputTitle1" className="form-label">
          Title
        </label>
        <input
          name="title"
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
          name="body"
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
          name="reactions"
          className="form-control"
          id="exampleInputReactions1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputUserID1" className="form-label">
          User ID
        </label>
        <input
          name="userId"
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
          name="tags"
          type="text"
          className="form-control"
          id="exampleInputTags1"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};

export default CreatePost;
