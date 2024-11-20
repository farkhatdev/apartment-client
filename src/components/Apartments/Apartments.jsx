import React, { useEffect, useState } from "react";
import Apartment from "./Apartment";
import "./apartments.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Apartments = ({ setAlert }) => {
  const [data, setData] = useState([]);
  // let publicURL = "https://apartment-gr2i0orv.b4a.run";
  let localURL = "http://localhost:8080";
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(localURL + "/apartment", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        });
        setData(response?.data?.data);
      } catch (error) {
        setAlert({
          message: error?.response?.data?.message || "Error",
          type: "error",
          active: true,
        });
      }
    }
    fetchData();
  });
  return (
    <div className="container">
      <div className="apartments">
        {data.map((apartment) => {
          return (
            <Link
              key={apartment.id}
              className="apartment-link"
              to={`/apartment/${apartment.id}`}
            >
              <Apartment apartment={apartment} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Apartments;
