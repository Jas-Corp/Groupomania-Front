import { Icon } from "@iconify/react";
import { useState } from "react";

const Post = (props) => {
  const images = props.post.images ? JSON.parse(props.post.images) : null;
  const [mainImage, setMainImage] = useState(images ? images[0] : null);
  const [imageSelected, setImageSelected] = useState(0);

  return (
    <article className="post">
      <div className="post__header">
        <div className="post__header__img">
          <img src="" alt="" />
        </div>
        <div className="post__info">
          <h3>{props.username}</h3>
          <span>Il y a 13 heures</span>
        </div>

        <span className="post__header__utils icon_orange link">
          <Icon icon="akar-icons:more-vertical" />
        </span>
      </div>
      <div className="post__content">
        <p>{props.post.content}</p>

        {mainImage && (
          <div className="post__mainImage">
            <img src={mainImage.base64} alt={mainImage.name} className={`im`} />
          </div>
        )}
        <div className="post__imageSelector">
          {images &&
            images.length != 1 &&
            images.map((image, index) => {
              return (
                <div
                  className={`post__imageSelector__image-container ${
                    imageSelected == index && "post__imageSelector__selected"
                  }`}
                  key={index}
                >
                  <img
                    src={image.base64}
                    alt={image.name}
                    onClick={() => {
                      setMainImage(image);
                      setImageSelected(index);
                    }}
                    className={`post__imageSelector__image`}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </article>
  );
};

export default Post;
