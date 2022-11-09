import { PropsWithChildren, useContext } from "react";
import AuthContext from "../../../../contexts/auth-context";
import { deletePost } from "../../../../core/posts/posts";

type Props = {
  postId: number;
  reloadPost: () => void;
};
const ContextMenu = (props: Props) => {
  const postId = props.postId;
  const authCtx = useContext(AuthContext);

  const onDelete = () => {
    deletePost(postId, authCtx.token, () => {
      props.reloadPost();
    });
  };

  const onEdit = () => {};

  return (
    <div className="test">
      <button>Voir plus</button>
      <button>Modifier</button>
      <button onClick={onDelete}>Supprimer</button>
    </div>
  );
};

export default ContextMenu;
