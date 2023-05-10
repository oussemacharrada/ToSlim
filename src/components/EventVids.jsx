import {apple, bill, google} from "../assets";
import styles, {layout} from "../style";
import {CriseSanté} from "../assets";
import {Sponsers} from "./";

const EventsVids = () => (
    <section class="text-gray-600 body-font">
        <div class="flex flex-wrap w-full mb-5 flex-col items-center text-center">
            <h1 class="sm:text-5xl text-3xl font-medium title-font mb-2 whiteheader">Exciting Events Across All Tunisia
            </h1>
        </div>
        <div class="container px-5 py-24 mx-auto flex flex-wrap">

            <div class="flex  flex-wrap w-full">
                <div
                    className="flex flex-col justify-center -mt-3 w-full ml-0 md:-ml-5 lg:-ml-10 ilg:-ml-14 lg:w-3/5 md:w-1/2 mx-auto my-8">

                    <video
                        controls
                        class="w-full h-2/3 object-cover object-center   md:mt-0 mt-12  border-16  border-[#424147]">
                        <source src={CriseSanté} type="video/mp4"></source >
                    </video>

                    <div
                        className=" w-full bg-[#424147]  h-48  overflow-hidden px-1  border-16  border-[#424147]	">
                        <div className="py-4  p-6">
                            <h1 className="header1 pb-5 text-white whiteheader   ">Closing ceremony of Boot-camp<br></br>
                                October 2022
                            </h1>
                        </div>
                    </div>
                </div>
                <div class=" lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 mt-1">
                    <div class="flex relative flex-wrap pb-10">
                        <div
                            class="flex-shrink-0 w-3/5 inline-flex items-center justify-center text-white relative z-10">
                            <video controls class="w-full object-cover object-center  md:mt-0  ">
                                <source src={CriseSanté} type="video/mp4"></source >
                            </video>
                        </div>
                        <div class="flex-grow pl-4 mt-20 md:mt-5">
                            <h2
                                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider videoTexture">
                                <strong>ENA</strong>
                                <br></br>
                                7th cohort
                            </h2>
                            <p class="leading-relaxed dateTexture">2022</p>
                        </div>
                    </div>
                    <div class="flex relative  pb-10">
                        <div
                            class="flex-shrink-0  w-3/5 inline-flex items-center justify-center text-white relative z-10">
                            <video controls class="w-full object-cover object-center  md:mt-0 mt-12  ">
                                <source src={CriseSanté} type="video/mp4"></source >
                            </video>
                        </div>
                        <div class="flex-grow pl-4 mt-20 md:mt-5">
                            <h2
                                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider videoTexture">
                                <strong>CORP</strong>
                                <br></br>
                                Graduation ceremony
                            </h2>
                            <p class="leading-relaxed dateTexture">2022</p>
                        </div>
                    </div>
                    <div class="flex relative  pb-10">
                        <div
                            class="flex-shrink-0 w-3/5 inline-flex items-center justify-center text-white relative z-10">
                            <video controls class="w-full object-cover object-center  md:mt-0 mt-12  ">
                                <source src={CriseSanté} type="video/mp4"></source >
                            </video>
                        </div>
                        <div class="flex-grow pl-4 mt-20 md:mt-5  ">
                            <h2
                                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider videoTexture">
                                <strong>GIZ</strong>
                                <br></br>
                                Tunisian-German cooperation
                            </h2>
                            <p class="leading-relaxed dateTexture">2022</p>
                        </div>
                    </div>
                    <div class="flex relative  pb-10">
                        <div
                            class="flex-shrink-0 w-3/5  inline-flex items-center justify-center text-white relative z-10">
                            <video controls class="w-full object-cover object-center  md:mt-0 mt-12  ">
                                <source src={CriseSanté} type="video/mp4"></source >
                            </video>
                        </div>
                        <div class="flex-grow pl-4 mt-20 md:mt-5">
                            <h2
                                class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider videoTexture">
                                <strong>AHK</strong>
                                <br></br>
                                Tunisian-German Chamber of Industry and Commerce</h2>
                            <p class="leading-relaxed dateTexture">2022</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default EventsVids;
