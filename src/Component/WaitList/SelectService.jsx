import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { GiCash } from "react-icons/gi";
import { useState } from "react";
const SelectService = ({setGoSteps}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (id) => {
    setSelectedItem(id);
  };

  const Services = [
    {
      id: 1,
      title: "Item 1",
      description:
        "haircut + shaving + scrub + mask + facial hair removal + hair coloring + beard trim",
      time: 30,
      price: 100,
    },
    {
      id: 2,
      title: "Item 2",
      description:
        "haircut + shaving + scrub + mask + facial hair removal + hair coloring + beard trim",
      time: 45,
      price: 150,
    },
    {
      id: 3,
      title: "Item 3",
      description:
        "haircut + shaving + scrub + mask + facial hair removal + hair coloring + beard trim",
      time: 60,
      price: 200,
    },
    {
      id: 4,
      title: "Item 4",
      description:
        "haircut + shaving + scrub + mask + facial hair removal + hair coloring + beard trim",
      time: 60,
      price: 200,
    },
    {
      id: 5,
      title: "Item 5",
      description:
        "haircut + shaving + scrub + mask + facial hair removal + hair coloring + beard trim",
      time: 60,
      price: 120,
    },
    {
      id: 6,
      title: "Item 6",
      description:
        "haircut + shaving + scrub + mask + facial hair removal + hair coloring + beard trim",
      time: 60,
      price: 200,
    },
  ];
  
  return (
    <>
      <div className="container-fluid ">
        <div className="row justify-content-center my-5 mx-1">
          <div className=" col-md-10 col-lg-9 col-xxl-7 col-12 py-5 text-center custom-border">
            <div className="row">
              <div className="col-12 text-start">
                <AiOutlineArrowLeft onClick={() => setGoSteps(0)} className="ms-5 gj-cursor-pointer back-btn"></AiOutlineArrowLeft>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <h2 className=" fw-bold">Select Services</h2>
                <p className="text-secondary">2 People Waiting</p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-11 overflow-auto" style={{ height: "500px" }}>
                <div className="row justify-content-center">
                  <div className="col-12 text-start my-3">
                    <h3 className="fw-bold mb-0 ms-5 category-title">
                      Hair Cut
                    </h3>
                  </div>
                  {Services.map((item) => (
                    <div
                      key={item.id}
                      className={`form-check category-border col-lg-10 col-11 px-0 my-3 ${
                        selectedItem === item.id ? "service-bg" : ""
                      }`}
                    >
                      <label className="row mx-0">
                        <div className="col-11 pl-30 py-3 text-start">
                          <p className="fs-3 pb-2 fw-bold m-0 user-select-none">
                            {item.title}
                          </p>
                          <p className="mb-3 user-select-none">
                            {item.description}
                          </p>
                          <p className="m-0 user-select-none">
                            <span className="me-3">
                              <BiTimeFive></BiTimeFive> {item.time} minutes{" "}
                            </span>

                            <span>
                              <GiCash></GiCash> {item.price}
                            </span>
                          </p>
                        </div>
                        <div className="col-1 my-auto">
                          <input
                            className="form-check-input float-end me-2"
                            type="radio"
                            name="radioService"
                            id={item.id}
                            onClick={() => handleItemClick(item.id)}
                          />
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-8 col-lg-6 mx-auto">
              <button onClick={() => setGoSteps(2)} className="btn btn--tra-black hover--black mt-4 ">
                Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SelectService;
