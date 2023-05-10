import {apple, bill, google} from "../assets";
import styles, {layout} from "../style";
import {CriseSanté} from "../assets";
import {Sponsers} from "./";

const DreamToDestination = () => (
    <section class="text-gray-600 body-font mb-48 mt-48">

        <div
            className="flex flex-row justify-center w-full  flex-wrap sm:flex-nowrap mb-30 ">
            <div
                className=" w-2/3 h-80  sm:h-48 lg:h-80 ilg:h-96 mt-10 -mr-0 sm:-mr-20  object-cover  bg-[#424147]  z-10">
                <div className="py-4 p-6 ">
                    <h1
                        className="header1 pb-5 text-white whiteheader  text-lg sm:h-text-xl lg:h-text-2xl ilg:text-3xl   shadow-lg  ">
                        <span className="text-gradient">Kepler!</span>
                        <br></br>
                        From dream destinations to unforgettable events!
                    </h1>
                    <p className="paragraph2 ">The organization of international business events
                        requires careful planning, attention to detail, and a deep understanding of
                        cultural differences and etiquette.</p>
                </div>
            </div>
            <video controls class="w-2/3 h-2/3 object-cover object-center z-0">
                <source src={CriseSanté} type="video/mp4"></source>
            </video>
        </div>

        <Sponsers/>

    </section>
);

export default DreamToDestination;
