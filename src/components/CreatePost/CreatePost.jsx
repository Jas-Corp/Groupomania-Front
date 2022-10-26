import { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import { createPost } from "../../core/posts/posts";
import FileBase64 from "react-file-base64";
import AuthContext from "../../contexts/auth-context";
import Button from "../Themes/handlers/Button/Button";

const CreatePost = (props) => {
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState([]);

  const authCtx = useContext(AuthContext);

  const formHandler = (e) => {
    e.preventDefault();

    if (content.length < 5) {
      setError("Le texte doit comporter au moins 5 caractères.");
      return;
    }

    setContent("");
    createPost(content, images, authCtx.token, props.reloadPost());
  };

  const onImageSelected = (e) => {
    if (e.length <= 4) {
      setImages([...e]);
      setError("");
    } else setError("Veillez à ce qu'il n'y ait pas plus de 4 images.");
  };

  return (
    <form className="create-post" onSubmit={formHandler}>
      <div className="create-post__content">
        <p className="create-post__text">
          Bonjour, <span className="highlight">{authCtx.name}</span> quoi de
          neuf ?
        </p>

        <div className="create-post__header">
          <textarea
            className="create-post__input"
            placeholder="Nouveau post..."
            value={content}
            required
            minLength="6"
            onChange={(e) => {
              setError("");
              setContent(e.target.value);
            }}
          />

          <div className="create-post__icons">
            <p className="create-post__error">{error}</p>

            <div className="create-post__icons__file">
              <label htmlFor="file" className="link">
                <Icon
                  icon="bi:file-earmark-image"
                  className="create-post__icons__file__icon"
                />
              </label>
              <FileBase64 id="file" multiple={true} onDone={onImageSelected} />
            </div>
          </div>
        </div>

        <div className="create-post__footer">
          <div className="create-post__images">
            {images.map((image) => (
              <img
                src={image.base64}
                alt={image.name}
                className="create-post__images__image"
              />
            ))}
          </div>

          <Button className="create-post__button">Publier</Button>
        </div>
      </div>
    </form>
  );
};

export default CreatePost;
