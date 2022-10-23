import Button from "../Themes/handlers/Button/Button";

const CreatePost = () => {
  return (
    <form className="create-post">
      <div className="create-post__header">
        <div className="create-post__header__img">
          <img src="" alt="" />
        </div>
        <textarea
          className="create-post__input"
          placeholder="Nouveau post..."
          required
        ></textarea>
      </div>
      <Button className="create-post__button">Posté</Button>
    </form>
  );
};

export default CreatePost;
