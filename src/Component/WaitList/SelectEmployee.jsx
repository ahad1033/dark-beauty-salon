import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import barber from "../../assets/images/gallery/barber_01.jpg"

const SelectEmployee = ({setGoSteps}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (id) => {
    setSelectedItem(id);
  };

  const Employees = [
    {
      id: 1,
      title: "Employee 1",
      img: barber,
    },
    {
      id: 2,
      title: "Employee 2",
      img: barber
    },
    {
      id: 3,
      title: "Employee 3",
      img: barber
    },
    {
      id: 4,
      title: "Employee 4",
      img: barber
    },
  ];
  
  return (
    <>
      <div className="container-fluid ">
        <div className="row justify-content-center my-5 mx-1">
          <div className="col-md-10 col-lg-9 col-xxl-7 col-12 py-5 text-center custom-border">
            <div className="row">
              <div className="col-12 text-start">
                <AiOutlineArrowLeft onClick={() => setGoSteps(1)} className="ms-5 gj-cursor-pointer back-btn"></AiOutlineArrowLeft>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <h2 className=" fw-bold ">Select Services</h2>
                <p className="text-secondary">2 People Waiting</p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-11 overflow-auto" style={{ height: "500px" }}>
                <div className="row justify-content-center">
                  {Employees.map((item) => (
                    <div
                      key={item.id}
                      className={`form-check category-border col-xl-3 col-lg-5 col-5 px-0  mx-2 my-3 ${
                        selectedItem === item.id ? "service-bg" : ""
                      }`}
                    >
                      <label className="row mx-0" htmlFor={item.id}>
                        <div className="col-12  py-3 text-center">
                          <img
                            src={item.img}
                            className="img-fluid rounded"
                            height={75}
                            width={150}
                          />
                        </div>
                        <div className="col-11 py-1 text-center">
                          <p className=" pb-2 fw-bold m-0 user-select-none d-inline-block">
                            {item.title}
                          </p>
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
            <div className="col-8 mt-2 col-lg-6 mt-4 mx-auto">
              <button onClick={() => setGoSteps(3)} className="btn btn--tra-black hover--black">
                Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectEmployee;
