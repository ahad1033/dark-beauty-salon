import React from "react";

const HomeBanner = () => {
  return (
    <section id="hero-10" class="bg--fixed hero-section">
      <div class="container">
        <div class="row">
          {/* <!-- HERO-10 TEXT -->	 */}
          <div class="col-lg-7">
            <div class="hero-10-txt color--white">
              {/* <!-- Title -->	 */}
              <h2>The Salon That Gives You Style</h2>

              {/* <!-- Text -->	 */}
              <p>
                Aliqum mullam blandit tempor diam sapien gravida donec ipsum
                porta justo velna auctor congue
              </p>

              {/* <!-- Button -->	 */}
              <a href="#lnk-1" class="btn btn--gold hover--tra-white">
                View Salon Menu
              </a>
            </div>
          </div>
          {/* <!-- END HERO-10 TEXT --> */}

          {/* <!-- HERO-10 SCHEDULE -->	 */}
          <div class="col-lg-5 align-self-end">
            <div class="hero-10-schedule color--white text-end">
              {/* <!-- Title -->	 */}
              <h5 class="h5-lg">Opening Hours</h5>

              {/* <!-- Text -->		 */}
              <p>
                Mon - Fri: <span>9:00AM - 8:00PM</span>
              </p>
              <p>
                Sat - Sun: <span>9:00AM - 6:30PM</span>
              </p>
            </div>
          </div>
          {/* <!-- END HERO-10 SCHEDULE -->			 */}
        </div>
        {/* <!-- End row --> */}
      </div>
      {/* <!-- End container --> */}
    </section>
  );
};

export default HomeBanner;
