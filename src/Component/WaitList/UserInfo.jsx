import { AiOutlineArrowLeft } from "react-icons/ai";

const UserInfo = ({ setGoSteps }) => {
  return (
    <div className="container">
      <div className="row justify-content-center my-5">
        <div className="custom-border col-11 col-md-10 col-lg-6">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-5">
              <div className="row">
                <div className="col-12 text-start">
                  <AiOutlineArrowLeft
                    onClick={() => setGoSteps(3)}
                    className="ms-2 mt-3 gj-cursor-pointer back-btn"
                  ></AiOutlineArrowLeft>
                </div>
              </div>
              <h3 className=" fw-bold pt-4">Information</h3>
            </div>
            <div className="col-10">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="text"
                className="form-control  border border-black rounded-0 p-2"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="col-10 my-3">
              <label htmlFor="exampleInputEmail1" className="form-label mb-0">
                Enter Your Phone Number
              </label>
            </div>
            <div className="col-10 mb-3 ">
              <div className="input-group">
                <span
                  className="input-group-text px-5 border border-black"
                  id="basic-addon1"
                >
                  @
                </span>
                <input
                  type="text"
                  className="form-control border border-black rounded-0 p-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="col-8 col-lg-6 mb-3 text-center">
              <button
                onClick={() => setGoSteps(5)}
                className="btn btn--tra-black hover--black mt-4 "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
