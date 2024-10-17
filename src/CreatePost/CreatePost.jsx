import React, { useRef, useState } from "react";
import "./create-post.css";
import { MdDelete } from "react-icons/md";
import personSvg from "../utils/icons/person-svg.svg";
import emailSvg from "../utils/icons/email.svg";

const CreatePost = () => {
  const inputImgRef = useRef();
  const [step] = useState(1);
  const [images, setImages] = useState([]);
  return (
    <div className="create-post page">
      <div className="container">
        <div className="create-post-inner">
          <div className="create-post-wrapper">
            <span className="step">{step} / 3</span>
            <div className="posting-apartment-images">
              {images.map((image, index) => {
                return (
                  <div key={index} className="posting-apartment-image">
                    <img src={image.imgUrl} alt="" width={200} height={200} />
                    <div className="delete-btn">
                      <button
                        onClick={() => {
                          const newImgs = images.filter(
                            (img) => img.id !== image.id
                          );
                          setImages(newImgs);
                        }}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                );
              })}
              {images.length >= 6 ? null : (
                <>
                  <div className="adding-apartment-btns">
                    <input
                      type="file"
                      accept="image/*"
                      ref={inputImgRef}
                      style={{ display: "none" }}
                      onChange={() => {
                        const file = inputImgRef.current.files[0];
                        if (!file) return;
                        const reader = new FileReader();
                        reader.onload = (e) => {
                          setImages((prev) => {
                            return [
                              ...prev,
                              { imgUrl: e.target.result, id: prev.length + 1 },
                            ];
                          });
                        };
                        reader.readAsDataURL(file);
                      }}
                    />
                    <button
                      onClick={() => {
                        inputImgRef.current.click();
                      }}
                    >
                      Add image
                    </button>
                  </div>
                </>
              )}
            </div>

            <form className="apartment-post-form">
              <div className="apartment-form-body">
                <div className="apartment-post-form-columns">
                  <div className="form-group">
                    <label htmlFor="address">
                      <img
                        className="form-icon"
                        src={personSvg}
                        width={18}
                        height={18}
                        alt=""
                      />
                    </label>
                    <label htmlFor="address">Qısqa address:</label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      autoComplete="off"
                      placeholder="27 mikro rayon"
                      maxLength={20}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="fullAddres">
                      <img
                        className="form-icon"
                        src={emailSvg}
                        width={18}
                        height={18}
                        alt=""
                      />
                    </label>
                    <label htmlFor="fullAddres">Tolıq address:</label>
                    <input
                      id="fullAddres"
                      name="fullAddres"
                      type="text"
                      autoComplete="off"
                      placeholder="Aydın jol MPJ Mega nukus qasinda"
                      required
                    />
                  </div>
                </div>
                <div className="apartment-post-form-columns">
                  <div className="form-group">
                    <label htmlFor="for-whom">
                      <img
                        className="form-icon"
                        src={personSvg}
                        width={18}
                        height={18}
                        alt=""
                      />
                    </label>
                    <label htmlFor="for-whom">Kimler ushın:</label>
                    <input
                      id="for-whom"
                      name="for-whom"
                      type="text"
                      autoComplete="off"
                      placeholder="Student ballar"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">
                      <img
                        className="form-icon"
                        src={personSvg}
                        width={18}
                        height={18}
                        alt=""
                      />
                    </label>
                    <label htmlFor="price">Baxası: sumda</label>
                    <input
                      className="custom-number-input"
                      id="price"
                      name="price"
                      type="number"
                      autoComplete="off"
                      placeholder="3 000 000 sum"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rooms">
                      <img
                        className="form-icon"
                        src={emailSvg}
                        width={18}
                        height={18}
                        alt=""
                      />
                    </label>
                    <label htmlFor="rooms">Xanalar sani:</label>
                    <input
                      className="custom-number-input"
                      id="rooms"
                      name="rooms"
                      type="number"
                      autoComplete="off"
                      placeholder="3"
                      required
                    />
                  </div>
                </div>
                <div className="apartment-post-form-columns">
                  <div className="form-group">
                    <label htmlFor="duration">
                      <img
                        className="form-icon"
                        src={personSvg}
                        width={18}
                        height={18}
                        alt=""
                      />
                    </label>
                    <label htmlFor="duration">Muddeti:</label>
                    <input
                      id="duration"
                      name="duration"
                      type="text"
                      autoComplete="off"
                      placeholder="Kunlik yaki ayliq"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tel1">
                      <img
                        className="form-icon"
                        src={emailSvg}
                        width={18}
                        height={18}
                        alt=""
                      />
                    </label>
                    <label htmlFor="tel1">Baylanıs 1:</label>
                    <input
                      id="tel1"
                      name="tel1"
                      type="tel"
                      autoComplete="off"
                      placeholder="+998123456789"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tel2">
                      <img
                        className="form-icon"
                        src={emailSvg}
                        width={18}
                        height={18}
                        alt=""
                      />
                    </label>
                    <label htmlFor="tel2">Baylanıs 2:</label>
                    <input
                      id="tel2"
                      name="tel2"
                      type="tel"
                      autoComplete="off"
                      placeholder="+998123456789"
                      required
                    />
                  </div>
                </div>
                <div className="form-btn-group">
                  <button type="reset">Clear</button>
                  <button type="submit">Next</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
