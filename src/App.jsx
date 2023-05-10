import styles from "./style";
import {
    Navbar,
    Services,
    Events,
    AboutUs,
    Sponsers,
    CTA,
    Stats,
    Footer,
    ContactUs,
    Hero,
    Team,
    Travel,
    EventsVids,
    DreamToDestination
} from "./components";

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
        <Hero/>

        <div
            className={`bg-primary bg-aboutus-pattern bg-no-repeat w-full w-[100vw] h-full z-0 object-cover  ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <AboutUs/>
                <Events/>
                <EventsVids/>

            </div>
        </div>
        <CTA/>
        <div className={` bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <DreamToDestination/>

            </div>
        </div>

        <div
            className={`bg-primary sm:bg-travel-pattern bg-Terminal-pattern w-[100vw] bg-cover bg-no-repeat bg-center bg-fixed z-0 object-cover${styles.paddingX} ${styles.flexCenter}`}>

            <Travel/>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Services/>

                <ContactUs/>
                <Sponsers/>
            </div>
        </div>
        <div className={`bg-[#424147] ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer/>
            </div>
        </div>

    </div>
);

export default App;
