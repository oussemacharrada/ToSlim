import styles from "../style";
import {TRAVELBAG, Location1, Location2, Location3} from "../assets";
const Travel = () => (
    <section
        id="Travel"
        className={`${styles.paddingY} ${styles.flexCenter} text-gray-600 body-font relative flex-col relative `}>

        <div class="container px-5 py-24 mx-auto flex flex-wrap min-h-[100vh]">
            <div
                class="flex flex-wrap  mt-auto mb-auto lg:w-3/4 sm:w-2/3 content-start sm:pr-10  -ml-5 lg:-ml-18 ilg:-ml-20 ">
                <div class="w-full sm:p-4 px-4 mb-5 sm:mb-14">
                    <h1 class="title-font font-medium text-8xl	 mb-2 text-gray-900 ">Ready To Explore The World?</h1>
                    <div class="leading-relaxed text-2xl redtitle">Here are some of the travel options we offer:</div>
                </div>
                <div class="relative p-4  mx-auto lg:mx-5 ">
                    <img
                        class="object-cover w-48 lg:w-48 ilg:w-64 "
                        src={Location1}
                        alt="Your image"></img>
                    <div
                        class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                        <h2
                            class="text-white  text-xl lg:text-2xl ilg:text-3xl  font-bold mb-2 px-1 pt-10 -ml-8  ilg:-mt-5 traveltitle">Beach<br></br>
                            Getaways</h2>
                        <p class="text-white text-sm lg:text-md ilg:text-lg mb-4 w-2/3 travelp py-3 px-1">Relax on
                            the white sands of the Caribbean or the turquoise waters of the Mediterranean.</p>
                    </div>
                </div>

                <div class="relative p-4  mx-auto lg:mx-5">
                    <img
                        class="object-cover  w-48 lg:w-48 ilg:w-64 "
                        src={Location2}
                        alt="Your image"></img>
                    <div
                        class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center ">
                        <h2
                            class="text-white text-xl lg:text-2xl ilg:text-3xl font-bold mb-2 px-1 pt-4 -ml-8  ilg:-mt-5 traveltitle">Adventure<br></br>
                            Travel</h2>
                        <p class="text-white text-sm lg:text-md ilg:text-lg mb-4 w-2/3 travelp py-3 px-1">Get your adrenaline pumping with safaris, hiking trips, and whitewater rafting.</p>
                    </div>
                </div>
                <div class="relative p-4  mx-auto lg:mx-5">
                    <img
                        class="object-cover  w-48 lg:w-48 ilg:w-64 "
                        src={Location3}
                        alt="Your image"></img>
                    <div
                        class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                        <h2
                            class="text-white text-xl lg:text-2xl ilg:text-3xl font-bold mb-2 px-1 pt-1 -ml-8  ilg:-mt-5 traveltitle">Cultural<br></br>
                            Tours</h2>
                        <p class="text-white text-sm lg:text-md ilg:text-lg  mb-4 w-2/3 travelp py-3 px-1">Immerse yourself in the history and culture of a new destination.</p>
                    </div>
                </div>
            </div>
            <div class="lg:w-1/3   sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0"></div>
        </div>
    </section>
);

export default Travel;
