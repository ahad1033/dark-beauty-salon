import React from 'react';
import womanTwo from '../../../assets/images/woman_02.jpg';

const TextContent = () => {
    return (
        <section className="pt-8 ct-01 content-section division">
            <div className="container">
                <div className="row d-flex align-items-center">


                    {/* -- TEXT BLOCK -- */}
                    <div className="col-lg-6 order-last order-lg-2">
                        <div className="txt-block left-column wow fadeInRight">

                            {/* -- Section ID -- */}
                            <span className="section-id">Mind, Body and Soul</span>

                            {/* -- Title -- */}
                            <h2 className="h2-md">Luxury salon where you will feel unique</h2>

                            {/* -- Text -- */}
                            <p className="mb-0">Sagittis congue augue egestas integer velna purus purus magna libero suscipit
                                and egestas magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec
                                undo augue luctus vitae egestas a molestie donec libero sapien  dapibus congue tempor undo quisque and fusce cursus neque blandit fusce aliquam nulla lacinia
                            </p>

                            {/* -- Button -- */}
                            <div className="txt-block-btn">
                                <a href="#gallery-4" className="btn btn--tra-black hover--black">Discover More</a>
                            </div>

                        </div>
                    </div>	
                    {/* -- END TEXT BLOCK -- */}


                    {/* -- IMAGE BLOCK -- */}
                    <div className="col-lg-6 order-first order-lg-2">
                        <div className="img-block right-column wow fadeInLeft">
                            {/* <img className="img-fluid" src="images/woman_02.jpg" alt="content-image" /> */}
                            <img className="img-fluid" src={womanTwo} alt="content-image" />
                        </div>
                    </div>


                </div>    
                {/* -- End row -- */}
            </div>	   
            {/* -- End container -- */}
        </section>
    );
};

export default TextContent;