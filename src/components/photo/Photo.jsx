import React from "react";
import { useParams } from "react-router-dom";
import Error from "../helper/Error";
import Loading from "../helper/Loading";
import PhotoContent from "../photo/PhotoContent";
import Head from "../helper/Head";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../redux/photo";

const Photo = () => {
  const { id } = useParams();
  const { loading, data, error } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhoto(id));
  }, [dispatch, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <>
        <section className="container mainContainer">
          <Head title={data.photo.title} description={"Postagem do usuário"} />
          <PhotoContent single={true} />
        </section>
      </>
    );
  else return null;
};

export default Photo;
