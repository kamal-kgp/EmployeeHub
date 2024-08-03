import React, { useState } from "react";

const AddEmp = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: {
      line1: "",
      city: "",
      country: "",
      zip_code: "",
      state: "",
    },
    contacts: {
      email_id: "",
      phone_no: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      address: {
        ...prevFormData.address,
        [name]: value,
      },
    }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      contacts: {
        ...prevFormData.contacts,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://free-ap-south-1.cosmocloud.io/development/api/employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        environmentId: "66aa75518f90e5d0511a0299",
        projectId: "66aa75518f90e5d0511a0298",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Employee added successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "600px", margin: "50px auto" }}
    >
      <h2>Employee Form</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          placeholder="Employee name"
        />
      </div>
      <div>
        <label>Employee Id</label>
        <input
          type="text"
          name="emp_id"
          value={formData.emp_id ? formData.emp_id : ""}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          placeholder="Employee id if any"
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          name="line1"
          value={formData.address.line1}
          onChange={handleAddressChange}
          required
          style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          placeholder="Line 1"
        />
        <input
          type="text"
          name="city"
          value={formData.address.city}
          onChange={handleAddressChange}
          required
          style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          placeholder="city"
        />
        <input
          type="text"
          name="state"
          value={formData.address.state}
          onChange={handleAddressChange}
          required
          style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          placeholder="state"
        />
        <input
          type="text"
          name="country"
          value={formData.address.country}
          onChange={handleAddressChange}
          required
          style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          placeholder="country"
        />
        <input
          type="text"
          name="zip_code"
          value={formData.address.zip_code}
          onChange={handleAddressChange}
          required
          style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          placeholder="Zip Code"
        />
      </div>
      <div>
        <label>Contact Details</label>
        <input
          type="email"
          name="email_id"
          value={formData.contacts.email_id}
          onChange={handleContactChange}
          required
          style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          placeholder="Employee email id"
        />
        <input
          type="tel"
          name="phone_no"
          value={formData.contacts.phone_no}
          onChange={handleContactChange}
          required
          style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          placeholder="Employee mobile number"
        />
      </div>
      <button
        type="submit"
        id="submit"
        style={{
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
          margin: "20px 0px",
        }}
        onMouseOver={() => {
          const ele = document.getElementById("submit");
          ele.style.backgroundColor = "#b27300";
        }}
        onMouseOut={() => {
          const ele = document.getElementById("submit");
          ele.style.backgroundColor = "#E59400";
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default AddEmp;
