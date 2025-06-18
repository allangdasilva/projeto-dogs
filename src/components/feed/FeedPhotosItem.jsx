import React from "react";
import styles from "./FeedPhotosItem.module.css";
import Image from "../helper/Image";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/ui";
import { fetchPhoto } from "../../redux/photo";

const FeedPhotosItem = ({ photo }) => {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(openModal());
    dispatch(fetchPhoto(photo.id));
  }
  return (
    <>
      <li className={styles.photo} onClick={handleClick}>
        <Image src={photo.src} alt={photo.title} />
        <span className={styles.preview}>{photo.acessos}</span>
      </li>
    </>
  );
};

export default FeedPhotosItem;
