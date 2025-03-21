import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { PHOTO_GET } from "../../api";
import Error from "../helper/Error";
import Loading from "../helper/Loading";
import PhotoContent from "../photo/PhotoContent";
import Head from "../helper/Head";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, request, error } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <>
        <section className="container mainContainer">
          <Head title={data.photo.title} description={"Postagem do usuário"} />
          <PhotoContent single={true} data={data} />
        </section>
      </>
    );
  else return null;
};

export default Photo;
