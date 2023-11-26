import { useState } from "react";
import OtpInput from "react-otp-input";
// import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Otp = ({ setGoSteps }) => {
  const [otp, setOtp] = useState("");
  console.log(otp);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div
          id="dialog"
          className="custom-border col-md-10 col-lg-7 col-xl-6 col-11 p-5 "
        >
          <div className="row d-flex justify-content-center">
            <div className="row">
              <div className="col-12 text-start">
                <AiOutlineArrowLeft
                  onClick={() => setGoSteps(2)}
                  className="gj-cursor-pointer back-btn"
                ></AiOutlineArrowLeft>
              </div>
            </div>
          </div>
          <h3 className="text-center fw-bold py-3">
            Please enter the 4-digit verification code we sent via SMS:
          </h3>
          <span className="text-center d-block">
            (we want to make sure its you before we contact our movers)
          </span>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputType={true}
            containerStyle="custom-otp-container"
            inputStyle="custom-otp-input"
            renderInput={(props) => (
              <input style={{ width: "2rem" }} {...props} />
            )}
          />
          <div className="text-center">
            <button className="btn btn--tra-black hover--black mt-4 ">
              Verify
            </button>
          </div>

          <div className="text-center mt-5">
            Didnt receive the code?
            <br />
            <Link className="gj-cursor-pointer">Send code again</Link>
            <br />
            <Link className="gj-cursor-pointer">Change phone number</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
