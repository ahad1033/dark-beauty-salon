import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services-2" className="pt-6 services-section division">
      <div className="container text-white">
        {/* -- SERVICES-2 WRAPPER -- */}
        <div className="sbox-2-wrapper text-center">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            {/* -- SERVICES BOX #1 -- */}
            <div className="col">
              <div className="sbox-2 sb-1 wow fadeInUp">
                {/* -- Icon -- */}
                <div className="sbox-ico ico-65 color--gold">
                  <span className="flaticon-facial-treatment"></span>
                </div>

                {/* -- Text -- */}
                <div className="sbox-txt">
                  <h5 className="h5-lg text-white">Facials</h5>
                  <p>
                    Sagittis congue augue egestas integer diam purus magna and
                    egestas magna suscipit
                  </p>
                </div>
              </div>
            </div>
            {/* -- END SERVICES BOX #1 -- */}

            {/* -- SERVICES BOX #2 -- */}
            <div className="col">
              <div className="sbox-2 sb-2 wow fadeInUp">
                {/* -- Icon -- */}
                <div className="sbox-ico ico-65 color--gold">
                  <span className="flaticon-wax"></span>
                </div>

                {/* -- Text -- */}
                <div className="sbox-txt">
                  <h5 className="h5-lg text-white">Waxing</h5>
                  <p>
                    Sagittis congue augue egestas integer diam purus magna and
                    egestas magna suscipit
                  </p>
                </div>
              </div>
            </div>
            {/* -- END SERVICES BOX #2 -- */}

            {/* -- SERVICES BOX #3 -- */}
            <div className="col">
              <div className="sbox-2 sb-3 wow fadeInUp">
                {/* -- Icon -- */}
                <div className="sbox-ico ico-65 color--gold">
                  <span className="flaticon-cosmetics"></span>
                </div>

                {/* -- Text -- */}
                <div className="sbox-txt">
                  <h5 className="h5-lg text-white">Make-Up</h5>
                  <p>
                    Sagittis congue augue egestas integer diam purus magna and
                    egestas magna suscipit
                  </p>
                </div>
              </div>
            </div>
            {/* -- END SERVICES BOX #3 -- */}

            {/* -- SERVICES BOX #4 -- */}
            <div className="col">
              <div className="sbox-2 sb-4 wow fadeInUp">
                {/* -- Icon -- */}
                <div className="sbox-ico ico-65 color--gold">
                  <span className="flaticon-nail-polish"></span>
                </div>

                {/* -- Text -- */}
                <div className="sbox-txt">
                  <h5 className="h5-lg text-white">Nails</h5>
                  <p>
                    Sagittis congue augue egestas integer diam purus magna and
                    egestas magna suscipit
                  </p>
                </div>
              </div>
            </div>
            {/* -- END SERVICES BOX #4 -- */}
          </div>
          {/* -- End row -- */}
        </div>
        {/* Services button starts */}

        <div className="row">
          <div className="col">
            <div className="more-btn">
              <Link to="/service" className="btn btn--tra-white hover--gold">
                See All Services
              </Link>
            </div>
          </div>
        </div>

        {/* Services button ends */}

        {/* -- END SERVICES-2 WRAPPER -- */}
      </div>
      {/* -- End container -- */}
    </section>
  );
};

export default Services;
