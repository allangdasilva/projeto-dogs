import styles from "./PhotoContent.module.css";
import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";
import PhotoDelete from "./PhotoDelete";
import Image from "../helper/Image";
import { useSelector } from "react-redux";

const PhotoContent = ({ single }) => {
  const { user } = useSelector((state) => state);
  const { comments, photo } = useSelector((state) => state.photo.data);

  return (
    <>
      <div className={`${styles.photo} ${single ? styles.single : ""}`}>
        <div className={styles.img}>
          <Image src={photo.src} alt={photo.title} />
        </div>
        <div className={styles.details}>
          <div>
            <p className={styles.author}>
              {user.data && user.data.username === photo.author ? (
                <PhotoDelete id={photo.id} />
              ) : (
                <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
              )}
              <span className={styles.preview}>{photo.acessos}</span>
            </p>
            <h1 className="title">
              <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
            </h1>
            <ul className={styles.attributes}>
              <li>{photo.peso} kg</li>
              <li>
                {photo.idade} {Number(photo.idade) === 1 ? "ano" : "anos"}
              </li>
            </ul>
          </div>
        </div>
        <PhotoComments single={single} id={photo.id} comments={comments} />
      </div>
    </>
  );
};

export default PhotoContent;
