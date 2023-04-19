import styles from "../style";
import { stats } from "../constants";
import Swipe from "react-easy-swipe";
import React, { Component } from "react";
import { Navbar,Clients } from "./../components";
import Button from "./Button";

import {   USAIDLogo,
  UTICALogo,
  ma3anLogo,
  FRIEDRICHLogo,
  fhiLogo,
  FAOLogo,
  CFADLogo,
  eclipse1,
  eclipse2,
  eclipse3 } from "../assets";
import GetStarted from "./GetStarted";
 const CarouselData = [
  {
    image: "./src/assets/heroBackground.png",
  },
  {
    image: "./src/assets/herobg2.png",
  },
  {
    image: "./src/assets/herobg3.png",
  },
];
class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === CarouselData.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 5000);
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === CarouselData.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? CarouselData.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = index => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <div className="w-full  object-cover	 bg-[url('./src/assets/aboutusbackground.png')]">
        <div className="absolute inset-x-0 bottom-0 h-1/2" />
        <div className="max-w-9xl mx-auto">
          <div className="relative sm:overflow-hidden">
            <div className="absolute inset-0  ">
              <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
                {CarouselData.map((slide, index) => {
                  return (
                    <img
                      src={slide.image}
                      alt="wall"
                      key={index}
                      className={
                        index === this.state.currentSlide
                          ? "w-full h-[100vh]   object-cover bg-cover  "
                          : "hidden"
                      }
                      onMouseEnter={() => {
                        this.setState({ paused: true });
                      }}
                      onMouseLeave={() => {
                        this.setState({ paused: false });
                      }}
                    />
                  );
                })}
              </Swipe>
              <div className="absolute inset-0  mix-blend-multiply" />
            </div>
            <div className="relative">
              <Navbar />
            <div className="max-w-[1080px] mx-auto">
        <div className={`flex md:flex-row flex-col p-0 	`  }>
    <div className={`flex-1 flex  md:my-0 my-5 relative`}>
      
    </div>
    <div className={`flex-1 ${styles.flexStart}  flex-col xl:px-0 sm:px-16 px-6 mb-2 `}>
      <div className="w-full h-full object-cover backdrop-blur-sm p-5 pl-10 block rounded-lg shadow-lg px-4 py-10 md:px-10  glassifedEffectBlur 	" >
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className="flex-1 font-poppins font-semibold  ss:text-[3.5vw] lg:text-[2.2vw] text-[4.4vw] text-white ss:leading-[3.8vw] lg:leading-[2.3vw]  leading-[4.8vw]">
            Exciting Events Across All Tunisia With <br />{" "}
            <span className="text-gradient">Kepler!</span>{" "}
          </h1>  
        </div>
        <p className={`${styles.paragraph} max-w-[570px] mt-5 ss:text-[2.5vw] lg:text-[1.2vw] text-[3.4vw] text-white ss:leading-[2.8vw] lg:leading-[1.3vw]  leading-[3.8vw]`}>
          Welcome to Kepler, your gateway to unforgettable travel experiences and exciting events. Our travel agency is passionate about curating the perfect Event package tailored to your interests. 
        </p>
        <Button styles={`mt-10`} />

      </div>
    </div>
  </div>


  <div className="container px-7   mx-auto mt-4">  
      <div className="flex flex-wrap -m-2 justify-center">

  {CarouselData.map((element, index) => {
                return (
                  <div className="p-2">
                  <img src={eclipse2} 
                    className={
                      index === this.state.currentSlide
                        ? "  w-100 bg-red-700 rounded-full mx-2 mb-2 cursor-pointer"
                        : "  w-100 hover:bg-white rounded-full mx-2 mb-2 cursor-pointer"
                    }
                    key={index}
                    onClick={() => {
                      this.setCurrentSlide(index);
                    }}
                  ></img>
                     </div>
                );
              })}
  
    </div>
  </div>

  <Clients />
</div>

            </div>
          
          </div>
        </div>
      </div>
    );
  }
}
export default Hero;
