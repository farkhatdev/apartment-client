import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const Apartment = ({ apartments }) => {
  return (
    <div className="apartment">
      <div className="apartment-main">
        <div className="apartment-main-img">
          <img src={apartments} alt={apartments} />
        </div>
        <div className="apartment-details">
          <h2>26-mikro rayon</h2>
          <p>
            Xanalar sani: <span>2</span>
          </p>
          <p>
            Kimler ushin: <span>Studentler, Semeyniy</span>
          </p>
          <p>
            Baxasi: <span>2 500 000 sum /ayina</span>
          </p>
          <p>
            Etaj: <span>4</span>
          </p>
          <p>
            Orientr: <span>Gizapro oqiw orayi</span>
          </p>
          <p>
            Shárayitlari: <span>Televizor, Muzlatqish, kir mashin</span>
          </p>
          <p>
            Adamlar sani: <span>5-6</span>
          </p>
          {/* <div className="more-link">
            <a href="#">Toliqraq</a>
          </div> */}
        </div>
      </div>
      <div className="apartment-info">
        <div className="upload-date">
          <CiCalendarDate size={22} />
          <span>15.10.2024 20:28</span>
        </div>
        <div className="count-views">
          <IoEyeOutline size={22} />
          <span>213</span>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
