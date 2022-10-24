import { Icon } from "@iconify/react";
const Post = (props) => {
  if (props.post.images) console.log();
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
      </div>
    </article>
  );
};

export default Post;
