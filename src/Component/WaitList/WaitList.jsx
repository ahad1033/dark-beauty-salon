const WaitList = ({setGoSteps}) => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mb-5 ">
          <div className="custom-border col-lg-8 col-md-10 col-11 py-5 text-center">
            <h3 className=" fw-bold ">
              
              Welcome to our Barber shop
            </h3>
            <p className="text-secondary">2 People Waiting</p>
            <div className="row justify-content-center">
              <div className="col-8 col-lg-6 mb-3">
                <button onClick={() => setGoSteps(1)} className="btn btn--tra-black w-100 hover--black">
                  Join WaitList
                </button>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-8 col-lg-6">
                <button onClick={() => setGoSteps(1)} className="btn btn--tra-black w-100 hover--black">
                  Reservation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitList;
