import { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import { createPost } from "../../../core/posts/posts";
import FileBase64 from "react-file-base64";
import AuthContext from "../../../contexts/auth-context";
import Button from "../../Themes/handlers/Button/Button";
import imagesToCompressedBase64 from "../../../core/utils/compressImage";

const PublishInput = (props) => {
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
    createPost(content, images, authCtx.token, (data) => {
      setError(data.message);
      setImages([]);
      props.reloadPost();
    });
  };

  const onImageSelected = (e) => {
    if (e.target.files.length <= 4) {
      const images_compressed = imagesToCompressedBase64(e.target.files);
      setImages(images_compressed);
      setError("");
    } else setError("Veillez à ce qu'il n'y ait pas plus de 4 images.");
  };

  return (
    <form className="publish" onSubmit={formHandler}>
      <div className="publish__content">
        <p className="publish__text">
          Bonjour, <span className="highlight">{authCtx.name}</span> quoi de
          neuf ?
        </p>

        <div className="publish__header">
          <textarea
            className="publish__input"
            placeholder="Nouveau post..."
            value={content}
            required
            minLength="6"
            onChange={(e) => {
              setError("");
              setContent(e.target.value);
            }}
          />

          <div className="publish__icons">
            <p className="publish__error">{error}</p>

            <div className="publish__icons__file">
              <label htmlFor="file" className="link">
                <Icon
                  icon="bi:file-earmark-image"
                  className="publish__icons__file__icon"
                />
              </label>
              <input
                type="file"
                accept="image/*"
                id="file"
                onChange={onImageSelected}
                multiple
              />
            </div>
          </div>
        </div>

        <div className="publish__footer">
          <div className="publish__images">
            {images.map((image) => (
              <img src={image} className="publish__images__image" />
            ))}
          </div>

          <Button className="publish__button">Publier</Button>
        </div>
      </div>
    </form>
  );
};

export default PublishInput;
