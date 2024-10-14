import React from "react";
import Apartment from "./Apartment";
import "./apartments.css";
import aprtImg from "../utils/images/kv.jpg";
import { Link } from "react-router-dom";

const Apartments = () => {
  return (
    <div className="container">
      {/* <div className="apartments">
        <Link className="apartment-link" to="/apartment/1">
          <Apartment apartments={aprtImg} />
        </Link>
        <Link className="apartment-link" to="/apartment/2">
          <Apartment apartments="https://cdn.sanity.io/images/v48q37k7/production/228f18d0df80ed40b26ec6fe867f9d0c0243e07f-2478x1654.jpg?auto=format&fit=max&q=50&w=1239" />
        </Link>
        <Link className="apartment-link" to="/apartment/3">
          <Apartment apartments="https://www.pariscorporatehousing.com/content/apartments/03010/images/main.jpg" />
        </Link>
        <Link className="apartment-link" to="/apartment/4">
          <Apartment apartments="https://cdn.sanity.io/images/v48q37k7/production/228f18d0df80ed40b26ec6fe867f9d0c0243e07f-2478x1654.jpg?auto=format&fit=max&q=50&w=1239" />
        </Link>
        <Link className="apartment-link" to="/apartment/5">
          <Apartment apartments="https://www.book-a-flat.com/photo/paris/16272/salon-1.jpg" />
        </Link>
        <Link className="apartment-link" to="/apartment/6">
          <Apartment apartments="https://www.pariscorporatehousing.com/content/apartments/15195/images/DSC_1020.jpg" />
        </Link>
      </div> */}
    </div>
  );
};

export default Apartments;
