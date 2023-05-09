import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const ContactUs = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} text-gray-600 body-font relative flex-col relative `}>

  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
 
    <div className="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 mx-20">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font blacktitle">Get in <span className="redtitle">Touch</span></h2>
      <p className="leading-relaxed mb-5 paragraph3">Please feel free to get in touch with me if you have any further questions or concerns.</p>
      <div className="relative mb-4">
        <input type="text" id="name" name="name" placeholder="Name" className="w-full input  border border-gray-300 focus:border-red-800 focus:ring-2 focus:ring-red-500 text-base outline-none text-gray-800 py-2 px-3 leading-8 transition-colors duration-500 ease-in-out"></input>
      </div>
      <div className="relative mb-4">
      <input type="email" id="email" name="email" placeholder="Email" className="w-full input rounded border border-gray-300 focus:border-red-800 focus:ring-2 focus:ring-red-500 text-base outline-none text-gray-800 py-2 px-3 leading-8 transition-colors duration-500 ease-in-out"></input>
      </div>
      <div className="relative mb-4">
        <input type="number" id="phonenumber" name="phonenumber" placeholder="PhoneNumber" className="w-full input rounded border border-gray-300 focus:border-red-800 focus:ring-2 focus:ring-red-500 text-base outline-none text-gray-800 py-2 px-3 leading-8 transition-colors duration-500 ease-in-out"></input>
      </div>
      <div className="relative mb-4">
        <input type="text" id="how" name="how" placeholder="How did you find us ? " className="w-full input rounded border border-gray-300 focus:border-red-800 focus:ring-2 focus:ring-red-500 text-base outline-none text-gray-800 py-2 px-3 leading-8 transition-colors duration-500 ease-in-out"></input>
      </div>

      <button className="text-white  border-0 py-3 px-6 focus:outline-none hover:bg-red-800  text-lg submitBtn">Send</button>

    </div>
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg min-h-[200px] sm:mr-10 p-10 flex items-end justify-start relative m-10">
      <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" vnb-frameid="2138" ></iframe>
      <div className="bg-[#423F49]  relative flex flex-wrap py-6 ml-16 -mb-28 min-w-[2rem]       shadow-md">
        <div className="lg:w-5/6 px-6">
          <h1 className="title-font whitetitle font-semibold text-white  tracking-widest  text-xs">Location<br></br> Found<span className="redtitle"> Kepler !</span></h1>
    
        </div>
       
      </div>
    </div>
  </div>  
  
  </section>
);

export default ContactUs;
