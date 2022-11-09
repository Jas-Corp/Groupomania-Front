import { Icon } from "@iconify/react";
import { useContext } from "react";
import { useState } from "react";
import AuthContext from "../../../contexts/auth-context";
import ContextMenu from "./ContextMenu/ContextMenu";
type Props = {
  username: String;
  post: {
    author: { email: string };
    images: string;
    id: number;
    content: string;
  };
  reloadPost: () => void;
};
const Post = (props: Props) => {
  const authCtx = useContext(AuthContext);
  const isAuthor = authCtx.email === props.post.author.email;

  let images = props.post.images ? JSON.parse(props.post.images) : null;
  if (images.length === 0) images = null;

  const [imageSelected, setImageSelected] = useState(0);
  const [displayContextMenu, setDisplayContextMenu] = useState(false);

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
          <Icon
            icon="akar-icons:more-vertical"
            onClick={() => {
              setDisplayContextMenu(true);
            }}
          />
          {displayContextMenu && isAuthor && (
            <ContextMenu postId={props.post.id} reloadPost={props.reloadPost} />
          )}
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
              alt="Main post"
            />
          </div>
        )}

        <div className="post__imageSelector">
          {images &&
            images.length !== 1 &&
            images.map((image: string, index: number) => (
              <div
                className={`post__imageSelector__image-container ${
                  imageSelected === index && "post__imageSelector__selected"
                }`}
                key={index}
              >
                <img
                  src={image}
                  onClick={() => {
                    setImageSelected(index);
                  }}
                  alt="A post"
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
