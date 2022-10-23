import { useContext } from "react";
import { useState } from "react";
import AuthContext from "../../contexts/auth-context";
import Button from "../Themes/handlers/Button/Button";
import createPost from "./core/CreatePost";

const CreatePost = (props) => {
  const [content, setContent] = useState("");
  const authCtx = useContext(AuthContext);
  const formHandler = (e) => {
    e.preventDefault();
    setContent("");
    createPost(content, authCtx.token, props.reloadPost());
  };

  return (
    <form className="create-post" onSubmit={formHandler}>
      <div className="create-post__content">
        <p className="create-post__text">
          Bonjour, <span className="highlight">Jas</span> quoi de neuf ?
        </p>
        <div className="create-post__header">
          <textarea
            className="create-post__input"
            placeholder="Nouveau post..."
            value={content}
            required
            minLength="6"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <Button className="create-post__button">Poster</Button>
      </div>
    </form>
  );
};

export default CreatePost;
