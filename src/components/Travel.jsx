
import styles from "../style";
import { TRAVELBAG,Location1,Location2,Location3 } from "../assets";
const Travel = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter}  text-gray-600 body-font relative flex-col relative `}>

  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap  mt-auto mb-auto lg:w-2/3 sm:w-2/3 content-start sm:pr-10">
    <div class="w-full sm:p-4 px-4 mb-6">
  <h1 class="title-font font-medium text-2xl sm:text-3xl lg:text-4xl mb-2 text-gray-900 blacktitle">Ready To Explore The World?</h1>
  <div class="leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl redtitle">Here are some of the travel options we offer:</div>
</div>
   <div class="p-4 sm:w-1/2 lg:w-1/3 w-1/2 relative">
   <div className="  rounded-lg object-cover w-64 h-80 overflow-hidden 	bg-location-pattern ">
    <div className="py-4  p-6">
      <h1 className=" pb-5 text-white traveltitle"> BUSINESS<br></br> TRAVEL</h1>
      <p className=" travelp">Coming together in an external setting to work and strengthen teams with the aim of rewarding or addressing important issues</p>
    </div>
  </div>
      </div>


      <div class="p-4 mx-1 sm:w-1/2 lg:w-1/3 w-1/2">
      <div className="  rounded-lg object-cover w-64 h-80 overflow-hidden 	bg-location-pattern ">
      <div className="py-4  p-6">
      <h1 className=" pb-5 text-white traveltitle"> BUSINESS<br></br> TRAVEL</h1>
      <p className=" travelp">Coming together in an external setting to work and strengthen teams with the aim of rewarding or addressing important issues</p>
    </div>
  </div>        
      </div>
      <div class="p-4  sm:w-1/2 lg:w-1/3 w-1/2">
      <div className="  rounded-lg object-cover w-64 h-80 overflow-hidden 	bg-location-pattern ">
      <div className="py-4  p-6">
      <h1 className=" pb-5 text-white traveltitle"> BUSINESS<br></br> TRAVEL</h1>
      <p className=" travelp">Coming together in an external setting to work and strengthen teams with the aim of rewarding or addressing important issues</p>
    </div>
  </div>      
    </div>
    </div>
    <div class="lg:w-1/3   sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
    </div>
  </div>
  </section>
);

export default Travel;
