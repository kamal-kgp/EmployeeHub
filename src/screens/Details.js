import react, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Details() {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const employeeId = queryParams.get("id");

  const [details, setDetails] = useState({});
  const [fetching, setFetching] = useState(false);
  const handleDetails = async (id) => {
    try {
      setFetching(true);
      const response = await fetch(
        `https://free-ap-south-1.cosmocloud.io/development/api/employee/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            environmentId: "66aa75518f90e5d0511a0299",
            projectId: "66aa75518f90e5d0511a0298",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const res = await response.json();
      setDetails(res);
      setFetching(false);
    } catch (error) {
      console.error("Error:", error);
      setFetching(false);
    }
  };

  useEffect(() => {
    handleDetails(employeeId);
  }, []);
  
  return (
    !fetching &&
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          width: "90%",
          padding: "40px 0px",
          margin: "auto",
          marginTop: "70px",
          borderRadius: "10px",
          boxShadow:
            "0px 0px 10px 0px #FFA500, 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: "#fffdf9",
        }}
      >
        <p style={textPrimary}>
          Name<span style={textSecondary}>&nbsp;:&nbsp;{details?.name}</span>
        </p>
        <p style={textPrimary}>
          Employee ID
          <span style={textSecondary}>
            &nbsp;:&nbsp;{details?.emp_id ? details?.emp_id : details?._id}
          </span>
        </p>
        <p style={textPrimary}>
          Address <span style={textSecondary}>&nbsp;:&nbsp;</span>
          <p style={{ ...textSecondary, padding: "5px 0px 5px 150px" }}>
            {details?.address?.line1}
          </p>
          <p style={{ ...textSecondary, padding: "5px 0px 5px 150px" }}>
            {details?.address?.city}, {details?.address?.state}
          </p>
          <p style={{ ...textSecondary, padding: "5px 0px 5px 150px" }}>
            {details?.address?.country}, {details?.address?.zip_code}
          </p>
        </p>
        <p style={textPrimary}>
          Email ID
          <span style={textSecondary}>
            &nbsp;:&nbsp;{details?.contacts?.email_id}
          </span>
        </p>
        <p style={textPrimary}>
          Mobile No
          <span style={textSecondary}>
            &nbsp;:&nbsp;{details?.contacts?.phone_no}
          </span>
        </p>
      </div>
    </div>
  );
}

const textPrimary = {
  color: "#b27300",
  fontFamily: "sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  padding: "7px 0px 7px 70px",
  margin: "0px 0px",
  width: "100%",
};

const textSecondary = {
  color: "#E59400",
  ontFamily: "sans-serif",
  fontSize: "20px",
  fontWeight: "600",
  margin: "0px 0px",
};
