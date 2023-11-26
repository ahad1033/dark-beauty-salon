import React from "react";
import img from "../../../assets/images/newsletter.jpg";

const OurLocation = () => {
  return (
    <section className="pt-8 ct-09 content-section division">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-title text-center mb-6">
              <span className="section-id color--gold">Our Locations</span>
              <h2 className="h2-title text-white">Welcome to Reine</h2>
            </div>
          </div>
        </div>

        <div className="ct-09-img mb-5">
          <div className="hover-overlay">
            <img className="img-fluid" src={img} alt="location-photo" />
            <div className="item-overlay"></div>
          </div>
        </div>

        <div className="py-8 ct-table content-section division text-white">
          <div className="container">
            <div className="row d-flex align-items-center">
              {/* <!-- TEXT --> */}
              <div className="col-lg-6">
                <div className="left-column wow fadeInRight">
                  {/* <!-- Section ID -->	 */}
                  <span className="section-id">Time Schedule</span>

                  {/* <!-- Title -->	 */}
                  {/* <h2 className="h2-md">Working Hours</h2> */}

                  {/* <!-- Text -->	 */}
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem rerum fuga esse id similique nemo mollitia minus
                    adipisci debitis, laborum in temporibus tenetur dolore
                    repellendus dolores quibusdam perferendis consequuntur ipsum
                    assumenda, excepturi aut possimus. Quod eligendi ab sint,
                    esse quaerat nulla sapiente soluta, vero aliquid pariatur,
                    consectetur in perspiciatis doloremque odit molestias
                    eveniet. Neque sequi mollitia quis, qui, rem corrupti
                    blanditiis accusantium aut quia aliquid eligendi earum
                    natus. Enim, eius.
                  </p>
                </div>
              </div>

              {/* <!-- TABLE -->	 */}
              <div className="col-lg-6">
                <span className="section-id">Working Hours</span>
                <div className="txt-table right-column wow fadeInLeft">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Mon – Wed</td>
                        <td> - </td>
                        <td className="text-end text-white">
                          10:00 AM - 9:00 PM
                        </td>
                      </tr>
                      <tr>
                        <td>Thursday</td>
                        <td> - </td>
                        <td className="text-end text-white">
                          10:00 AM - 7:30 PM
                        </td>
                      </tr>
                      <tr>
                        <td>Friday</td>
                        <td> - </td>
                        <td className="text-end text-white">
                          10:00 AM - 9:00 PM
                        </td>
                      </tr>
                      <tr className="last-tr">
                        <td>Sun - Sun</td>
                        <td>-</td>
                        <td className="text-end text-white">
                          10:00 AM - 5:00 PM
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <!-- END TABLE -->	 */}
            </div>
            {/* <!-- End row --> */}
          </div>
          {/* <!-- End container --> */}
        </div>
      </div>
    </section>
  );
};

export default OurLocation;
