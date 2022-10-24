import { useContext } from "react";
import { useState } from "react";
import AuthContext from "../../contexts/auth-context";
import Button from "../Themes/handlers/Button/Button";
import createPost from "./core/CreatePost";
import { Icon } from "@iconify/react";
import FileBase64 from "react-file-base64";
const CreatePost = (props) => {
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState([]);
  const authCtx = useContext(AuthContext);
  const formHandler = (e) => {
    e.preventDefault();

    if (content.length < 20) {
      setError("Le texte doit comporter au moins 20 caractères.");
      return;
    }
    setContent("");
    createPost(content, images, authCtx.token, props.reloadPost());
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
              <FileBase64
                id="file"
                multiple={true}
                onDone={(e) => {
                  if (e.length <= 4) {
                    setImages([...e]);
                    setError("");
                  } else
                    setError(
                      "Veillez à ce qu'il n'y ait pas plus de 4 images."
                    );
                }}
              />
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

          <Button className="create-post__button">Poster</Button>
        </div>
      </div>
    </form>
  );
};

export default CreatePost;
