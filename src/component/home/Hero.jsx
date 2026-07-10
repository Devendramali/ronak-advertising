import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  const heroRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Step 1: Whole Hero Section
      tl.from(heroRef.current, {
        y: -1000,
        // minHeight:0,
        opacity: 0,
        duration: 3,
        ease: "linear",
      });

      // Step 2: Heading from Left
      tl.from(
        ".herohead",
        {
          x: 120,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "+=0.2"
      );

      // Step 3: Bill Content from Right
      tl.from(
        ".billcont",
        {
          x: -120,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );

      // Step 4: Slider from Left
      tl.from(
        ".hero-slider",
        {
          x: 120,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (<div className="heroheight">
    <div className="hero" ref={heroRef}>
      <div className="herocontainer">
        <div className="herohead">
          <h1>
            Unlock Now the Business <span>Billboard</span> Brilliance
          </h1>
        </div>

        <div className="row g-0">
          <div className="col-lg-4">
            <div className="billcont">
              <h3>500+</h3>
              <p>
                Billboard advertising is a powerful marketing tool that helps
                businesses gain visibility.
              </p>

              <a href="#!" className="btn1">
                Contact Us
              </a>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="hero-slider">
              <HeroSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;