import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { plane,aboutus, Team2,
  Team3,
  Team4,    
  Team5,
  Team6,Team1} from "../assets";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px]  my-4  feature-card cardBack xs:h-[40vh] ss:h-[250px] h-[60vh] max-w-[525px] `}>
    <div className={`w-[64px] h-[64px] rounded-full  ${styles.flexCenter} bg-red-800 text-gray-700	`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain text-gray-700 fill-white		" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-white text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

export const Content = () => {
  return (
    <section id="AboutUs" className={`${layout.section}  mt-0 pt-0  `}>

    <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 m-0">
    <div className={layout.section}>
    <div class="flex items-center flex-wrap mb-10">
      <div class="w-full md:w-1/2 px-4">
        <h1 class="text-3xl text-gray-800 font-bold mb-3 darkheader">
          Our History
        </h1>
        <p class="text-gray-600 mb-8">
        kepler travel services is a travel agency based in Mégrine, specialized in traveling, organizing , animating seminars, conferences, exhibitions, corporate evenings, product launches, and team building activities. We accompany you from the conception to the realization of your event project, in order to implement all the necessary means for logistical organization and smooth running of your event anywhere in Tunisia and abroad.        </p>
      </div>
      <div class="w-full md:w-1/2 px-4">
        <img src={aboutus} alt="responsive"></img>
      </div>
    </div>
    
    </div>
    <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div class="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4 darkheader my-2 mb-8">Mission And Vision</h1>
        </div>
    
    </div>
        <div className={`${layout.sectionImg} flex  flex-wrap justify-evenly items-center w-full       `}>
        {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
        </div>
      <div class="flex lg:flex-row w-full flex-col justify-between gap-8 pt-12">
        <div class="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4 darkheader">Our Team</h1>
        </div>
    
    </div>
                <div class="flex flex-wrap">
                 



              
                    <div class="w-full md:w-6/12 lg:w-[12vw] mb-6 px-6 sm:px-6 lg:px-2"   >
                        <div class="flex flex-col">
                 
                            <a href="#" class="mx-auto">
                                <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src={Team5}></img>
                            </a>

                            <div class="text-center mt-6">
            
                                <h1 class="text-gray-900 text-xl font-bold mb-1">
                                Belhassen Ben Rached
                       </h1>

             
                                <div class="text-gray-700 font-light mb-2">
                                CEO         
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-6/12 lg:w-[12vw] mb-6 px-6 sm:px-6 lg:px-2">
                    <div class="flex flex-col">
                        <a href="#" class="mx-auto">
                            <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                src={Team2}></img>
                        </a>

                        <div class="text-center mt-6">
                            <h1 class="text-gray-900 text-xl font-bold mb-1">
                            Rami Saadaoui                             </h1>

                            <div class="text-gray-700 font-light mb-2">
                  Project Manager
                            </div>

                          
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-6/12 lg:w-[12vw] mb-6 px-6 sm:px-6 lg:px-2">
                    <div class="flex flex-col">
                        <a href="#" class="mx-auto">
                            <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                src={Team6}></img>
                        </a>

                        <div class="text-center mt-6">
                            <h1 class="text-gray-900 text-xl font-bold mb-1">
                            Ahmed Ben Rached                            </h1>

                            <div class="text-gray-700 font-light mb-2">
                        
Event Manager                            </div>

                          
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-6/12 lg:w-[12vw] mb-6 px-6 sm:px-6 lg:px-2">
                    <div class="flex flex-col">
                        <a href="#" class="mx-auto">
                            <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                src={Team4}></img>
                        </a>

                        <div class="text-center mt-6">
                            <h1 class="text-gray-900 text-xl font-bold mb-1">
                            Jihena Dridi                            </h1>

                            <div class="text-gray-700 font-light mb-2">
                            Reservation and    Ticketing Manager
                            </div>

                          
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-6/12 lg:w-[12vw] mb-6 px-6 sm:px-6 lg:px-2">
                    <div class="flex flex-col">
                        <a href="#" class="mx-auto">
                            <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                src={Team3}></img>
                        </a>

                        <div class="text-center mt-6">
                            <h1 class="text-gray-900 text-xl font-bold mb-1">
                            Jihena Hajaiej
</h1>

                            <div class="text-gray-700 font-light mb-2">
                            Accountant           
                            </div>

                          
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-6/12 lg:w-[12vw] mb-6 px-6 sm:px-6 lg:px-2">
                    <div class="flex flex-col">
                        <a href="#" class="mx-auto">
                            <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                src={Team1}></img>
                        </a>

                        <div class="text-center mt-6">
                            <h1 class="text-gray-900 text-xl font-bold mb-1">
                            Khaoula Ghazouani
                      </h1>

                            <div class="text-gray-700 font-light mb-2">
                                Director of Event  Operations    
                            </div>

                          
                        </div>
                    </div>
                </div>
                </div>
            </div>


</section>
         
  );
};
const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>

      <Button styles={`mt-10`} />
    </div>

 
  </section>
);

export default Content;
