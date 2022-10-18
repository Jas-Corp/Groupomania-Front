import { Icon } from "@iconify/react";
const Post = () => {
  return (
    <article className="post">
      <div className="post__header">
        <div className="post__header__img">
          <img src="" alt="" />
        </div>
        <div className="post__info">
          <h3>Jas</h3>
          <span>Il y a 13 heures</span>
        </div>

        <span className="post__header__utils link">
          <Icon icon="akar-icons:more-vertical" />
        </span>
      </div>
      <div className="post__content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
          eligendi. Similique, sint? Ut, hic! Odio dolor placeat temporibus
          omnis quis provident ex voluptatum totam eos tenetur at nisi mollitia,
          esse dolores nihil dolore eius earum quo. Sint aut illum expedita
          distinctio ratione atque numquam ducimus nulla aspernatur, excepturi
          repellat maxime debitis, accusantium repellendus nesciunt neque,
          veritatis quas explicabo inventore vitae nemo? Est enim eveniet
          ducimus excepturi unde expedita, magni aspernatur ipsam hic eligendi
          corporis iusto recusandae voluptates explicabo accusantium numquam
          nobis, delectus libero ex dicta qui nulla, minima fugit rem? Iure
          tenetur sit facilis! In sequi impedit at voluptates, exercitationem
          quod laudantium laborum laboriosam minima itaque. Asperiores iste
          aperiam molestiae. Dicta debitis nihil neque? Quam, officia unde
          similique doloribus, amet eaque explicabo ducimus rerum culpa ratione
          tempora atque esse in totam excepturi animi! Cum, exercitationem quo
          totam harum pariatur velit quam magni quidem quasi quas ad laboriosam
          mollitia quae. Voluptatibus sed libero debitis reiciendis recusandae
          porro! Laboriosam iste quibusdam facere, recusandae corrupti modi cum
          adipisci omnis explicabo in quisquam sit, eum, nihil quo magnam
          nesciunt? Inventore, soluta voluptates! Impedit sint ullam aspernatur
          odit perspiciatis molestiae fuga blanditiis assumenda, numquam
          explicabo praesentium nostrum repellendus est similique, vel, tempore
          ex. Voluptate, quia.
        </p>
      </div>
    </article>
  );
};

export default Post;
