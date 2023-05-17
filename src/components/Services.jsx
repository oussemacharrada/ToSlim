import {apple, bill, google} from "../assets";
import styles, {layout} from "../style";
import {
    EVENT,
    EVENT1,
    EVENT2,
    EVENT3,
    EVENT4,
    EVENT5,
    card
} from "../assets";
import {Sponsers} from "./";

const Services = () => (

    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap mx-auto ">
            <div class="sm:w-1/2 w-full mb-10 sm:mb-0 rounded-lg  ">
                <div
                    className={`bg-gray-300 h-[48rem] sm:h-[47.5rem] md:h-[47.5rem] lg:h-[44.4 rem] ilg:h-[44.2rem] xl:h-[44.7rem] w-full shadow-md bg-cover bg-blend-normal bg-center bg-event-pattern imgeffect`}></div>
                <div
                    className="w-full sm:w-[26rem] md:w-[30rem] lg:w-[33rem]  ilg:w-[34rem] xl:w-[31rem] ml-0 sm:ml-16 md:ml-16 lg:ml-28 ilg:ml-64 xl:ml-48 bg-[#423F49]    h-auto ss:h-[18rem  sm:h-[18rem] lg:h-[15rem]  -mt-48 shadow-lg overflow-hidden px-1 pb-20	">
                    <div className="py-4  p-6">
                        <h1 className="header1 pb-5 text-[#FFFFFF]">Meetings & Incentives</h1>
                        <p className="paragraph1 text-[#FFFFFF]">Hotel and accommodation selection<br></br>Catering and catering services<br></br>Transportation and transfers<br></br>
                            Themed evenings, Cocktail Dinatoire, Gala dinners<br></br>Audiovisual equipment<br></br>Continuous assistance</p>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col flex-wrap sm:py-6 -mb-10 w-full  sm:w-1/2  sm:mr-0 sm:pl-12 sm:text-left text-center mb-[1.5rem]">
                <div class="flex flex-col mb-10 sm:items-start items-center">

                    <div class="flex-grow">
                        <h2 class="text-gray-900  text-2xl ss:text-5xl title-font font-medium redtitle ss:leading-[3.8rem] my-5  leading-[3.2rem]">We Provide the Best
                            <br></br>
                            <span className="blacktitle  text-4xl ss:text-7xl ">Services</span>
                        </h2>

                    </div>
                </div>
                <div class="flex flex-col  sm:items-start items-center mb-[1.5rem] ">
                    <div class="flex-grow">
                        <div
                            className="w-full sm:w-[26rem] md:w-[30rem] lg:w-[33rem]  ilg:w-[34rem] xl:w-[31rem] bg-[#99232F]    h-auto sm:h-[18rem] lg:h-[15rem]  mx-auto      shadow-lg overflow-hidden  pl-8">
                            <div className="py-4  p-6">
                                <h1 className="header1 pb-5 text-[#FFFFFF]">
                                    Operational marketing</h1>
                                <p className="paragraph1 text-[#FFFFFF]">We also carry out high-impact
                                    operations with the aim of making a lasting impression. These are short-term
                                    events designed to quickly increase the visibility of a brand, product, or
                                    company</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="flex flex-col w-full sm:w-[26rem] md:w-[30rem] lg:w-[33rem]  ilg:w-[34rem] xl:w-[31rem]  sm:items-start items-center mr-1  ss:mr-0   h-auto sm:h-[18rem] lg:h-[15rem] ml-0 mr-0 lg:ml-16 ilg:ml-24 xl:ml-16 mt-[1.5rem] shadow-lg bg-[#F4EDE5] ">
                    <div class="flex-grow">
                        <div
                            className=" lg:h-[15rem]    overflow-hidden  pl-8	">
                            <div className="py-4  p-6">
                                <h1 className="header1 text-[#8B8B8B]">
                                    Team Building</h1>
                                <p className="paragraph1 text-[#8B8B8B]">Paintball / Olympiads
                                    <br></br>
                                    Bumper ball tournaments<br></br>
                                    Skyrunner initiation<br></br>
                                    Gladiator tournaments<br></br>
                                    Treasure hunt / Sniper hunt<br></br>
                                    Babouche race</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <Sponsers/>

    </section>
);

export default Services;
