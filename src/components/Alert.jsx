import React from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineErrorOutline } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";

const Alert = ({ alert, setAlert }) => {
  if (alert.active) {
    setTimeout(() => {
      setAlert((prev) => {
        return { ...prev, active: false };
      });
    }, 1300);
  }
  const { message, type, active } = alert;
  let size = 25;
  return (
    <div className={`alert ${type} ${active ? "active" : null}`}>
      <div className="alert-icon">
        {type === "success" ? (
          <CiCircleCheck size={size + 5} />
        ) : (
          <MdOutlineErrorOutline size={size} />
        )}
      </div>
      <h4>{message}</h4>
      <div
        className="alert-icon close"
        onClick={() => {
          setAlert((prev) => {
            return { ...prev, active: false };
          });
        }}
      >
        <IoMdClose size={size} />
      </div>
    </div>
  );
};

export default Alert;
