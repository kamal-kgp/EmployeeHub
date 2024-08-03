import react, { useEffect, useState } from "react";
import EmpCard from "../utils/EmpCard";

const Home = () => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false);

  const handleFetch = async () => {
    setFetching(true);
    fetch(
      "https://free-ap-south-1.cosmocloud.io/development/api/employee?limit=20&offset=0",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          environmentId: "66aa75518f90e5d0511a0299",
          projectId: "66aa75518f90e5d0511a0298",
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        setData(res.data);
        setFetching(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setFetching(false);
      });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    !fetching &&
    <div
      style={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {data?.length > 0 ? (
        data?.map((emp, index) => <EmpCard data={emp} key={emp._id} />)
      ) : (
        <h1
          style={{
            color: "#E59400",
            ontFamily: "sans-serif",
            fontWeight: "600",
          }}
        >
          No Employees In The System
        </h1>
      )}
    </div>
  );
};

export default Home;
