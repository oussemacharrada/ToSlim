import {apple, bill, google} from "../assets";
import styles, {layout} from "../style";
import {CriseSanté,gizVideoThumbnail} from "../assets";
import {Sponsers} from "./";

const DreamToDestination = () => (
    <section class="text-gray-600 body-font mb-48 mt-48">

<div className="flex flex-row justify-center w-full flex-wrap sm:flex-nowrap mb-30">
    <div className="w-2/3 h-120 ss:h-64 sm:h-64 lg:h-80 ilg:h-96 mt-10 -mr-0 sm:-mr-20 object-cover bg-[#424147] z-10">
        <div className="py-4 p-6 pr-10 text-left"> 
                <h1 className="text-gradient text-left mb-5 text-2xl sm:text-4xl lg:text-5xl ilg:text-6xl text-left px-6 pt-3 ">Kepler!</h1>
                <p className="header1 pb-5 text-white text-left px-6 text-lg sm:h-text-xl lg:text-2xl ilg:text-3xl  text-left">
                From dream destinations to unforgettable events!
            </p>
            <p className="paragraph2 px-6">The organization of international business events requires careful planning,
                attention to detail, and a deep understanding of cultural differences and etiquette.</p>
        </div>
    </div>
    <video controls class="w-2/3 h-2/3 object-cover object-center z-0" >
        <source src={CriseSanté} type="video/mp4"></source>
    </video>
</div>

        <Sponsers/>

    </section>
);

export default DreamToDestination;
