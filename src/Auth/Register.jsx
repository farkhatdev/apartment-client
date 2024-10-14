import React, { useEffect, useState } from "react";
import "./auth.css";
import emailSvg from "../utils/icons/email.svg";
import personSvg from "../utils/icons/person-svg.svg";
import passwordSvg from "../utils/icons/password.svg";
import verifySvg from "../utils/icons/verified-svgrepo-com.svg";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import { Link } from "react-router-dom";
const SERVER_URL = process.env.SERVER_URL;
console.log(SERVER_URL);

const Register = ({ setIsAuthenticated, setAlert }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    password: "",
    confirmPasword: "",
    verifyCode: "",
  });

  useEffect(() => {
    setForm((prev) => {
      return { ...prev, verifyCode: "" };
    });
  }, [step]);

  // let min = "";
  // let sec = "";

  // if (otpExpiredIn) {
  //   min = String(Math.floor(otpExpiredIn / 60));
  //   sec = String(otpExpiredIn - Math.floor(otpExpiredIn / 60) * 60);
  // }

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "phone") {
      if (value === "." || value === ",") return;
      let phoneNum = String(value);
      if (!phoneNum.startsWith("+998")) {
        setForm({ ...form, phone: "+998" });
      } else setForm({ ...form, phone: phoneNum });
    } else
      setForm({
        ...form,
        [e.target.name]: value,
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step === 1) {
      try {
        const { name, phone, password, confirmPasword } = form;

        if (!name || !phone || !password || !confirmPasword) {
          return;
        }
        setLoading(true);
        const response = await axios.post(
          "http://localhost:8080/auth/register",
          form
        );
        setAlert({
          message: response?.data?.message,
          type: "success",
          active: true,
        });
        setOtp(response?.data?.otp);
        // let expiredIn = response?.data?.expiredIn - Date.now();
        // expiredIn = Math.floor(expiredIn / 1000);

        setStep(2);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setAlert({
          message: error?.response?.data?.message || "Error",
          type: "error",
          active: true,
        });
      }
    } else if (step === 2) {
      try {
        setLoading(true);
        let res = await axios.post(
          "http://localhost:8080/auth/verify-code",
          form
        );
        localStorage.setItem("access-token", res?.data?.token);
        setIsAuthenticated(true);
        setAlert({
          message: res?.data?.message,
          type: "success",
          active: true,
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setAlert({
          message: error?.response?.data?.message || "Error",
          type: "error",
          active: true,
        });
      }
    }
  };
  return (
    <div className="login auth-page container">
      {step === 1 ? (
        <form action="" onSubmit={handleSubmit} className="form">
          <div className="form-heading">
            <h2>Welcome, Create your account</h2>
          </div>
          <div className="form-body">
            <div className="form-group">
              <label htmlFor="name">
                <img
                  className="form-icon"
                  src={personSvg}
                  width={18}
                  height={18}
                  alt=""
                />
              </label>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                name="name"
                value={form.name}
                type="text"
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">
                <img
                  className="form-icon"
                  src={emailSvg}
                  width={20}
                  height={20}
                  alt=""
                />
              </label>
              <label htmlFor="phone">Phone:</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                onChange={handleChange}
                maxLength={13}
                minLength={13}
                value={form.phone}
                autoComplete="off"
                onFocus={() => {
                  if (form.phone === "") {
                    setForm({
                      ...form,
                      phone: "+998",
                    });
                  }
                }}
                placeholder="+998 99 999 99 99"
                required
              />
            </div>
            <div className="form-columns">
              <div className="form-group">
                <label htmlFor="password">
                  <img
                    className="form-icon"
                    src={passwordSvg}
                    width={20}
                    height={20}
                    alt=""
                  />
                </label>
                <label htmlFor="password">Password:</label>
                <input
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={form.password}
                  type="password"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">
                  <img
                    className="form-icon"
                    src={passwordSvg}
                    width={20}
                    height={20}
                    alt=""
                  />
                </label>
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input
                  id="confirm-password"
                  name="confirmPasword"
                  type={"password"}
                  onChange={handleChange}
                  value={form.confirmPasword}
                  required
                />
              </div>
            </div>

            <div className="form-group form-buttons">
              <button type="submit" className={loading ? "loading" : null}>
                {loading ? (
                  <BeatLoader size={12} color="#ffffff" />
                ) : (
                  "Register"
                )}
              </button>
              <Link to="/auth/login">Don't have an account?</Link>
            </div>
          </div>
        </form>
      ) : step === 2 ? (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <h2>Verify your phone number</h2>
          </div>
          <p>
            Your OTP: <b>{otp}</b>
          </p>
          {/* <p>
            {min.length >= 2 ? min : "0" + min}:
            {sec.length >= 2 ? sec : "0" + sec}
          </p> */}
          <div className="form-body">
            <p
              style={{
                marginBottom: "8px",
                textAlign: "center",
                color: "gray",
              }}
            >
              {form.phone}
            </p>
            <div className="form-group">
              <label htmlFor="email">
                <img
                  className="form-icon"
                  src={verifySvg}
                  width={20}
                  height={20}
                  alt=""
                />
              </label>
              <label htmlFor="name">OTP code:</label>
              <input
                className="otp-code"
                id="verifyCode"
                value={form.verifyCode}
                name="verifyCode"
                type="text"
                onChange={handleChange}
                required
                placeholder="000 000"
              />
            </div>
            <div className="form-group form-buttons">
              <button type="submit" className={loading ? "loading" : null}>
                {loading ? <BeatLoader size={12} color="#ffffff" /> : "Verify"}
              </button>
              <Link to="/auth/register" onClick={() => setStep(1)}>
                Edit phone number
              </Link>
            </div>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default Register;
