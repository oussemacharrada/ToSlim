import { EVENT, EVENT1,EVENT2,EVENT3,EVENT4,EVENT5,card } from "../assets";

import styles, { layout } from "../style";
import Button from "./Button";

const Events = () => (
  
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 class="sm:text-5xl text-3xl font-medium title-font mb-2 whiteheader">Looking for exciting B2B events? </h1><br></br>
      <h1 class="sm:text-5xl text-3xl font-medium title-font mb-2 whiteheader">Check out our upcoming offerings:</h1>

    </div>
    <div class="flex flex-wrap -m-4 ">
      <div class="lg:w-1/3 md:w-1/2 p-4 mx-auto ">
      <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
  <div className={`bg-gray-300 h-96 w-full   shadow-md bg-cover bg-blend-normal	 bg-center bg-event-pattern imgeffect`}></div>
  <div className="w-80 md:w-80 bg-[#99232F]  h-64  -mt-20 shadow-lg overflow-hidden px-1 pb-20	">
    <div className="py-4  p-6">
      <h1 className="header1 pb-5 text-white"> BUSINESS TRAVEL</h1>
      <p className="paragraph2">Coming together in an external setting to work and strengthen teams with the aim of rewarding or addressing important issues</p>
    </div>
  </div>
</div>

      </div>
      <div class="lg:w-1/3 md:w-1/2 p-4 mx-auto ">
      <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
  <div className={`bg-gray-300 h-96 w-full   shadow-md bg-cover bg-blend-normal	 bg-center bg-event1-pattern imgeffect`}></div>
  <div className="w-80 md:w-80 bg-[#99232F]  h-64 -mt-20 shadow-lg overflow-hidden px-1 pb-20	">
    <div className="py-4  p-6">
      <h1 className="header1 pb-5 text-white"> Internal corporate event</h1>
      <p className="paragraph2">End-of-year events, anniary celebrations, or the June Garden Party are convivial moments during which associates come together to socialize. We handle everything for you from A to Z</p>
    </div>
  </div>
</div>
      </div>
      <div class="lg:w-1/3 md:w-1/2 p-4 mx-auto ">
      <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
  <div className={`bg-gray-300 h-96 w-full   shadow-md bg-cover bg-blend-normal	 bg-center bg-event2-pattern imgeffect`}></div>
  <div className="w-80 md:w-80 bg-[#99232F]  h-64  -mt-20 shadow-lg overflow-hidden px-1 pb-20	">
    <div className="py-4  p-6">
      <h1 className="header1 pb-5 text-white"> GENERAL ASSEMBLY 
CONFERENCE</h1>
      <p className="paragraph2">Whether it's for 20 or 1500 people, we tailor all of our proposals to the specifications that we establish together</p>
    </div>
  </div>
</div>
      </div>
      <div class="lg:w-1/3 md:w-1/2 p-4 mx-auto ">
      <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
  <div className={`bg-gray-300 h-96 w-full   shadow-md bg-cover bg-blend-normal	 bg-center bg-event3-pattern imgeffect`}></div>
  <div className="w-80 md:w-80 bg-[#99232F]  h-64  -mt-20 shadow-lg overflow-hidden px-1 pb-20	">
    <div className="py-4  p-6">
      <h1 className="header1 pb-5 text-white"> Operational marketing</h1>
      <p className="paragraph2">We also carry out high-impact operations with the aim of making a lasting impression. These are short-term events designed to quickly increase the visibility of a brand, product, or company</p>
    </div>
  </div>
</div>
      </div>
      <div class="lg:w-1/3 md:w-1/2 p-4 mx-auto ">
      <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
  <div className={`bg-gray-300 h-96 w-full   shadow-md bg-cover bg-blend-normal	 bg-center bg-event4-pattern imgeffect`}></div>
  <div className="w-80 md:w-80 h-64 bg-[#99232F] -mt-20 shadow-lg overflow-hidden px-1 pb-20	">
    <div className="py-4  p-6">
      <h1 className="header1 pb-5 text-white"> Seminar</h1>
      <p className="paragraph2">Taking care of finding a venue, coordinating transportation, and ensuring that you have everything you need is the most important thing for us</p>
    </div>
  </div>
</div>
      </div>
      <div class="lg:w-1/3 md:w-1/2 p-4 mx-auto ">
      <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
  <div className={`bg-gray-300 h-96 w-full   shadow-md bg-cover bg-blend-normal	 bg-center bg-event5-pattern imgeffect`}></div>
  <div className="w-80 md:w-80 bg-[#99232F]  h-64  -mt-20 shadow-lg overflow-hidden px-1 pb-20	">
    <div className="py-4  p-6">
      <h1 className="header1 pb-5 text-white"> TEAM BUILDING</h1>
      <p className="paragraph2">Because a hardworking team that shares, communicates, and knows each other well is a productive and fulfilled team</p>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</section>


 
);

export default Events;
