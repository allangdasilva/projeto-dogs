import React, { lazy } from "react";
import Head from "../helper/Head";
import useFetch from "../../hooks/useFetch";
import { STATS_GET } from "../../api";
import Loading from "../helper/Loading";
import Error from "../helper/Error";
const UserStatsGraph = lazy(() => import("./UserStatsGraph"));

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
        <React.Suspense fallback={<div></div>}>
          <UserStatsGraph data={data} />
        </React.Suspense>
      </div>
    );
  else return null;
};

export default UserStats;
