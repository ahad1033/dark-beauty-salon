import React from "react";
import img1 from "../../../assets/images/gallery/gallery/barber_02.jpg";
import img2 from "../../../assets/images/gallery/gallery/barber_03.jpg";
import img3 from "../../../assets/images/gallery/gallery/barber_04.jpg";
import img4 from "../../../assets/images/gallery/gallery/barber_05.jpg";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div id="gallery-4" className="py-8 mx-5 gallery-section division">
      <div className="">
        {/* <!-- SECTION TITLE --> */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-title text-center mb-6">
              {/* <!-- Section ID -->	 */}
              <span className="section-id color--gold">Be a more perfect</span>

              {/* <!-- Title -->	 */}
              <h2 className="h2-title text-white">Redefine Your Beauty</h2>
            </div>
          </div>
        </div>

        {/* <!-- GALLERY-4 WRAPPER --> */}
        <div className="px-3 container mt-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {/* Image 1 */}
            <div className="col">
              <img src={img1} className="img-fluid" alt="Image 1" />
            </div>

            {/* Image 2 */}
            <div className="col">
              <img src={img2} className="img-fluid" alt="Image 2" />
            </div>

            {/* Image 3 */}
            <div className="col">
              <img src={img3} className="img-fluid" alt="Image 3" />
            </div>

            {/* Image 4 */}
            <div className="col">
              <img src={img4} className="img-fluid" alt="Image 4" />
            </div>
          </div>
        </div>
        {/* <!-- END GALLERY-4 WRAPPER -->	 */}

        {/* <!-- BUTTON -->		 */}
        <div className="row">
          <div className="col">
            <div className="more-btn">
              {/* <a href="gallery.html" className="btn btn--tra-black hover--black">Visit Our Gallery</a> */}
              <Link to="/gallery" className="btn btn--tra-white hover--gold">
                Visit Our Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End container --> */}
    </div>
  );
};

export default Gallery;
