import react, { useState } from "react";

const EmpCard = ({ data }) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://free-ap-south-1.cosmocloud.io/development/api/employee/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            environmentId: "66aa75518f90e5d0511a0299",
            projectId: "66aa75518f90e5d0511a0298",
          },
          body: JSON.stringify({ id: id }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      alert("Employee deleted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
      alert(`Error deleting employee: ${error.message}`);
    }
  };

  const handleDetails = async (id) => {
    window.location.href = `/details?id=${id}`;
  };

  return (
    <>
      <div
        className="card"
        style={{
          width: "100%",
          paddingTop: "20px",
        }}
      >
        <div
          className="card-body"
          style={{
            width: "80%",
            height: "100px",
            margin: "auto",
            borderRadius: "10px",
            boxShadow:
              "-10px 10px 20px -10px #FFA500, 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "#fffdf9",
          }}
        >
          <div
            style={{
              height: "100%",
              margin: "20px 0px",
            }}
          >
            <p style={textPrimary}>Name</p>
            <p style={textSecondary}>{data?.name}</p>
          </div>
          <div>
            <p style={textPrimary}>Employee ID</p>
            <p style={textSecondary}>
              {data?.emp_id ? data.emp_id : data?._id}
            </p>
          </div>
          <button
            id={`details_${data?._id}`}
            style={buttonStyle}
            onMouseOver={() => {
              const ele = document.getElementById(`details_${data?._id}`);
              ele.style.backgroundColor = "#b27300";
            }}
            onMouseOut={() => {
              const ele = document.getElementById(`details_${data?._id}`);
              ele.style.backgroundColor = "#E59400";
            }}
            onClick={() => handleDetails(data?._id)}
          >
            Details
          </button>
          <button
            id={`delete_${data?._id}`}
            style={buttonStyle}
            onMouseOver={() => {
              const ele = document.getElementById(`delete_${data?._id}`);
              ele.style.backgroundColor = "#b27300";
            }}
            onMouseOut={() => {
              const ele = document.getElementById(`delete_${data?._id}`);
              ele.style.backgroundColor = "#E59400";
            }}
            onClick={() => handleDelete(data?._id)}
          >
            delete
          </button>
        </div>
      </div>
    </>
  );
};

export default EmpCard;

const textPrimary = {
  color: "#b27300",
  fontFamily: "sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
};

const textSecondary = {
  color: "#E59400",
  ontFamily: "sans-serif",
  fontSize: "16px",
  fontWeight: "600",
};

const buttonStyle = {
  width: "90px",
  height: "40px",
  backgroundColor: "#E59400",
  color: "#fff",
  borderRadius: "5px",
  padding: "5px 10px",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
};
