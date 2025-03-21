import React from "react";
import Head from "../helper/Head";
import useFetch from "../../hooks/useFetch";
import { STATS_GET } from "../../api";
import Loading from "../helper/Loading";
import Error from "../helper/Error";
import UserStatsGraph from "./UserStatsGraph";

const UserStats = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function getStats() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getStats();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title={"Estatísticas"} description={"Estatísticas"} />
        <UserStatsGraph data={data} />
      </div>
    );
  else return null;
};

export default UserStats;
