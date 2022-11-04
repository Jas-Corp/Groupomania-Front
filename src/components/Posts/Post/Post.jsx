import { Icon } from "@iconify/react";
import { useState } from "react";

const Post = (props) => {
  let images = props.post.images ? JSON.parse(props.post.images) : null;
  if (images.length == 0) images = null;
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
          <div className="test"></div>
        </span>
      </div>

      <div className="post__content">
        <p>{props.post.content}</p>

        {/* IMAGE */}
        {images && (
          <div className="post__mainImage">
            <img
              src={images[imageSelected]}
              className="post__mainImage__image"
            />
          </div>
        )}

        <div className="post__imageSelector">
          {images &&
            images.length != 1 &&
            images.map((image, index) => (
              <div
                className={`post__imageSelector__image-container ${
                  imageSelected == index && "post__imageSelector__selected"
                }`}
                key={index}
              >
                <img
                  src={image}
                  onClick={() => {
                    setImageSelected(index);
                  }}
                  className={`post__imageSelector__image`}
                />
              </div>
            ))}
        </div>
      </div>
    </article>
  );
};

export default Post;
