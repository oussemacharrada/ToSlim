import {features} from "../constants";
import styles, {layout} from "../style";
import Button from "./Button";
import {
    plane,
    aboutus,
    Team2,
    Team3,
    Team4,
    Team5,
    Team6,
    Team1
} from "../assets";
import {Team} from "./../components";

const FeatureCard = ({icon, title, content, index}) => (
    <div
        className={`flex flex-row p-6 rounded-[20px] z-0 object-cover my-4 feature-card cardBack xs:h-auto ss:h-[300px] h-auto max-w-[525px]`}>
        <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-red-800 text-gray-700`}>
            <img
                src={icon}
                alt="star"
                className="w-[50%] h-[50%] object-contain text-gray-700 fill-white"/>
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4
                className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
                {content}
            </p>
            <div className="mt-auto">
                <button className="learnmorebtn text-white px-10 py-1 h-10 2">Learn more</button>
            </div>
        </div>
    </div>

);

export const AboutUs = () => {
    return (
        <section id="AboutUs" className={`${layout.section} mt-0 pt-0 mt-5 ss:mt-32  lg:mt-5 `}>

            <div
                class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 m-0">
                <div className={layout.section}>
                    <div class="flex items-center flex-wrap mb-10">
                        <div class="w-full md:w-1/2 px-4">
                            <h1 class="text-3xl text-gray-800 font-bold mb-3 darkheader">
                                Our History
                            </h1>
                            <p class="text-gray-600 mb-8">
                                kepler travel services is a travel agency based in Mégrine, specialized in
                                traveling, organizing , animating seminars, conferences, exhibitions, corporate
                                evenings, product launches, and team building activities. We accompany you from
                                the conception to the realization of your event project, in order to implement
                                all the necessary means for logistical organization and smooth running of your
                                event anywhere in Tunisia and abroad.
                            </p>
                        </div>
                        <div class="w-full md:w-1/2 px-4 ">
                            <img src={aboutus} alt="responsive" className="mx-auto my-4"></img>
                        </div>
                    </div>

                </div>
                <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                    <div class="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1
                            class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4 darkheader my-2 mb-8">Mission And Vision</h1>
                    </div>

                </div>
                <div
                    className={`${layout.sectionImg} flex flex-wrap justify-evenly items-center w-full `}>
                    {features.map((feature, index) => (<FeatureCard key={feature.id} {...feature} index={index}/>))}
                </div>
                <div class="flex lg:flex-row w-full flex-col justify-between gap-8 pt-12">
                    <div class="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1
                            class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4 darkheader">Our Team</h1>
                    </div>

                </div>
                <Team/>
            </div>

        </section>

    );
};

export default AboutUs;
