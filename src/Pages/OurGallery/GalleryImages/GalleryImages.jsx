import React from "react";
import img1 from "../../../assets/images/gallery/gallery/barber_02.jpg";
import img2 from "../../../assets/images/gallery/gallery/barber_03.jpg";
import img3 from "../../../assets/images/gallery/gallery/barber_04.jpg";
import img4 from "../../../assets/images/gallery/gallery/barber_05.jpg";

const GalleryImages = () => {
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {/* Image 1 */}
        <div className="col">
          <img src={img1} className="img-fluid" alt="Image 1" />
        </div>

        {/* Image 2 */}
        <div className="col">
          <img src={img2} className="img-fluid" alt="Image 1" />
        </div>

        {/* Image 3 */}
        <div className="col">
          <img src={img3} className="img-fluid" alt="Image 1" />
        </div>

        {/* Image 4 */}
        <div className="col">
          <img src={img4} className="img-fluid" alt="Image 1" />
        </div>

        {/* Image 5 */}
        <div className="col">
          <img src={img2} className="img-fluid" alt="Image 1" />
        </div>

        {/* Image 6 */}
        <div className="col">
          <img src={img3} className="img-fluid" alt="Image 1" />
        </div>

        {/* Image 7 */}
        <div className="col">
          <img src={img4} className="img-fluid" alt="Image 1" />
        </div>

        {/* Image 8 */}
        <div className="col">
          <img src={img3} className="img-fluid" alt="Image 1" />
        </div>

        {/* Image 9 */}
        <div className="col">
          <img src={img4} className="img-fluid" alt="Image 1" />
        </div>

        {/* Image 10 */}
        <div className="col">
          <img src={img1} className="img-fluid" alt="Image 1" />
        </div>

        {/* Image 11 */}
        <div className="col">
          <img src={img2} className="img-fluid" alt="Image 1" />
        </div>

        {/* Image 12 */}
        <div className="col">
          <img src={img3} className="img-fluid" alt="Image 1" />
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;
