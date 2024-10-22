import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const Apartment = ({ apartment }) => {
  const { shortAddress, fullAddress, forWhom, price, rooms, images, id } =
    apartment;
  const randomNumber = Math.floor(Math.random() * images.length);

  const postedDate = new Date(id);
  const date = {
    year: postedDate.getFullYear(),
    day: postedDate.getDate(),
    month: postedDate.getMonth() + 1,
    calculateMonth: () => {
      console.log(this.month);
    },
  };
  const { year, month, day } = date;
  return (
    <div className="apartment">
      <div className="apartment-main">
        <div className="apartment-main-img">
          <img src={images[randomNumber]} alt={images[randomNumber]} />
        </div>
        <div className="apartment-details">
          <h2>{shortAddress}</h2>
          <p>
            Xanalar sani: <span>{rooms}</span>
          </p>
          <p>
            Kimler ushin: <span>{forWhom}</span>
          </p>
          <p>
            Baxasi: <span>{price} sum /ayina</span>
          </p>
          <p>
            Orientr: <span>{fullAddress}</span>
          </p>
          <p>
            Shárayitlari: <span>Televizor, Muzlatqish, kir mashin</span>
          </p>
          <p>
            Adamlar sani: <span>5-6</span>
          </p>
        </div>
      </div>
      <div className="apartment-info">
        <div className="upload-date">
          <CiCalendarDate size={22} />
          <span>{`${day}.${month}.${year} | 20:28`}</span>
        </div>
        <div className="count-views">
          <IoEyeOutline size={22} />
          <span>345</span>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
