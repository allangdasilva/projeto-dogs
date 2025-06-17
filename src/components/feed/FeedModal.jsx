import React from "react";
import styles from "./FeedModal.module.css";
import Error from "../helper/Error";
import Loading from "../helper/Loading";
import PhotoContent from "../photo/PhotoContent";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../redux/photo";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhoto(photo.id));
  }, [photo, dispatch]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <>
      <div className={styles.modal} onClick={handleOutsideClick}>
        {error && <Error error={error} />}
        {loading && <Loading />}
        {data && <PhotoContent />}
      </div>
    </>
  );
};

export default FeedModal;
