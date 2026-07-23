import React from "react";
import billboard from "../../assets/imgs/location/billboard.png";
import shop from "../../assets/imgs/location/shop.png";
import Heading from "../reuse/Heading";

const WhyVashi = () => {
  return (
    <div className="container mt-5">
    <div className="why-vashi">
      <div className="container">
         <Heading
                                title="Why Vashi"
                                // subtitle="Socials"
                                titleclass="text-black"
                            />

        <div className="why-grid">

          {/* Left Image */}
          <div className="why-image " data-gsap>
            <img src={billboard} alt="Billboard" />
          </div>

          {/* Right Cards */}


            <div className="stat-card white-card card-1" data-gsap>
              <h3>15+</h3>
              <p>Creative Campaigns Tailored To Your Brand's Voice</p>
            </div>

            <div className="stat-card white-card card-2" data-gsap>
              <h3>1000</h3>
              <p>Creative Campaigns Tailored To Your Brand's Voice</p>
            </div>

         

          {/* Bottom Left */}
          <div className="traffic-card card-3" data-gsap>
            <div className="traffic-icon">⊖</div>
            <p>HIGH TRAFFIC ZONE</p>
          </div>

          {/* Bottom Middle */}
          <div className="shop-card card-4" data-gsap>
            <div className="shop-content">
              <h3>
                Creative Campaigns Tailored To Your Brand's Voice
              </h3>
            </div>

            <div className="shop-image" data-gsap>
              <img src={shop} alt="Shop" />
            </div>
          </div>

          {/* Bottom Right */}
          <div className="stat-card white-card card-5" data-gsap>
            <h3>200+</h3>
            <p>Creative Campaigns Tailored To Your Brand's Voice</p>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default WhyVashi;