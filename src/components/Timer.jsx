import React, { useEffect, useState } from "react";

const Timer = ({ time }) => {
  const [otpExpiredIn, setOtpExpiredIn] = useState(time);
  useEffect(() => {
    setInterval(() => {
      setOtpExpiredIn((prev) => prev - 1);
    }, 1000);
  }, [time]);
  return <div>{otpExpiredIn}</div>;
};

export default Timer;
