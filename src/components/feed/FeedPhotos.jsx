import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../hooks/useFetch";
import Error from "../helper/Error";
import Loading from "../helper/Loading";
import { PHOTO_GET } from "../../api";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTO_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <>
        <ul className={`${styles.feed} animeLeft`}>
          {data.map((photo) => (
            <FeedPhotosItem key={photo.id} photo={photo} />
          ))}
        </ul>
      </>
    );
  else return null;
};

export default FeedPhotos;
