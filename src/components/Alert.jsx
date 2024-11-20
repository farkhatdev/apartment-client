import React from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineErrorOutline } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../store/slices/uiSlice";

const Alert = () => {
  const alert1 = useSelector((state) => state.ui.alert);
  const dispatch = useDispatch();
  if (alert1.active) {
    setTimeout(() => {
      dispatch(setAlert({ ...alert1, active: false }));
    }, 1300);
  }
  const { message, type, active } = alert1;
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
          dispatch(setAlert({ ...alert1, active: false }));
        }}
      >
        <IoMdClose size={size} />
      </div>
    </div>
  );
};

export default Alert;
