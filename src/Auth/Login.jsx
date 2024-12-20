import React, { useState } from "react";
import "./auth.css";
import emailSvg from "../utils/icons/email.svg";
import passwordSvg from "../utils/icons/password.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import { useDispatch } from "react-redux";
import { setAlert } from "../store/slices/uiSlice";

const Login = ({ setIsAuthenticated }) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ phone: "", password: "" });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    try {
      let value = e.target.value;
      let lastLetter = String(value).at(value.length - 1);

      const regex = /^[0-9]*$/;
      if (e.target.name === "phone") {
        if (!regex.test(lastLetter)) return;
        let phoneNum = String(e.target.value);
        if (!phoneNum.startsWith("+998")) {
          setForm({
            ...form,
            phone: "+998",
          });
        } else {
          setForm({
            ...form,
            phone: e.target.value,
          });
        }
      } else {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    // let localURL = "http://localhost:8080";
    let URL = "https://apartment-gr2i0orv.b4a.run";
    try {
      e.preventDefault();
      const { phone, password } = form;

      if (!phone || !password) {
        return;
      }
      setLoading(true);
      const response = await axios.post(URL + "/auth/login", form);
      setLoading(false);
      localStorage.setItem("access-token", response?.data?.token);

      dispatch(
        setAlert({
          text: response?.data?.message,
          active: true,
          type: "success",
        })
      );
      setIsAuthenticated(true);
    } catch (error) {
      setLoading(false);
      dispatch(
        setAlert({
          message: error?.response?.data?.message || "Error",
          type: "error",
          active: true,
        })
      );
    }
  };
  return (
    <div className="login auth-page container">
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form-heading">
          <h2>Welcome back, Log in</h2>
        </div>

        <div className="form-body">
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
              autoComplete="off"
              value={form.phone}
              placeholder="+998 99 999 99 99"
              maxLength={13}
              minLength={13}
              onChange={handleChange}
              onFocus={() => {
                if (form.phone === "") {
                  setForm({
                    ...form,
                    phone: "+998",
                  });
                }
              }}
              required
            />
          </div>
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
              type={"password"}
              onChange={handleChange}
              value={form.password}
              required
            />
          </div>

          <div className="form-group form-buttons">
            <button>
              {loading ? <BeatLoader size={12} color="#ffffff" /> : "Login"}
            </button>
            <Link to="/auth/register">Don't have an account?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
