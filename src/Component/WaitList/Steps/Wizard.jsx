import { Fragment, useState } from "react";
import { Stepper, Step } from "react-form-stepper";

import WaitList from "../WaitList";
import SelectService from "../SelectService";
import SelectEmployee from "../SelectEmployee";
import DateAndTime from "../DateAndTime";
import UserInfo from "../UserInfo";

const Wizard = () => {
  const [goSteps, setGoSteps] = useState(0);
  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-xl-12 col-xxl-12">
            <div className=""></div>
            <div className="card-body">
              <div>
                <Stepper className="" activeStep={goSteps}>
                  <Step onClick={() => setGoSteps(0)} />
                  <Step onClick={() => setGoSteps(1)} />
                  <Step onClick={() => setGoSteps(2)} />
                  <Step onClick={() => setGoSteps(3)} />
                  <Step onClick={() => setGoSteps(4)} />
                </Stepper>
                {goSteps === 0 && (
                  <>
                    <WaitList setGoSteps={setGoSteps} />
                    <div className="text-end toolbar toolbar-bottom p-2"></div>
                  </>
                )}
                {goSteps === 1 && (
                  <>
                    <SelectService setGoSteps={setGoSteps} />
                  </>
                )}
                {goSteps === 2 && (
                  <>
                    <SelectEmployee setGoSteps={setGoSteps} />
                  </>
                )}
                {goSteps === 3 && (
                  <>
                    <DateAndTime setGoSteps={setGoSteps} />
                  </>
                )}
                {goSteps === 4 && (
                  <>
                    <UserInfo setGoSteps={setGoSteps} />
                    <div className="text-end toolbar toolbar-bottom p-2">
                      <button
                        className="btn btn-secondary sw-btn-prev me-1"
                        onClick={() => setGoSteps(3)}
                      >
                        Prev
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Wizard;
