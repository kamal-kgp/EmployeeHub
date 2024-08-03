import react from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div style={{ backgroundColor: "#E59400", overflow: "hidden" }}>
      <Link
        to="/"
        style={{
          float: "left",
          display: "block",
          color: "#fff",
          textAlign: "center",
          padding: "18px 40px",
          fontSize: "24px",
          fontFamily: "sans-serif",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        EmployeeHub
      </Link>

      <Link
        to="/addemp"
        style={{
          float: "right",
          display: "block",
          color: "#fff",
          textAlign: "center",
          padding: "18px 50px",
          fontSize: "24px",
          fontFamily: "sans-serif",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        Add Employee
      </Link>
    </div>
  );
}
