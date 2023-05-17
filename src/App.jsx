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
const { t } = useTranslation();

const App = () => (

    function handleClick(lang) {
      i18next.changeLanguage(lang)
    }
  
    return (
      <div className="App">
          <nav style={{ width: '100%', padding: '2rem 0', backgroundColor:'gray' }}>
            <button onClick={()=>handleClick('en')} >
              English
            </button>
            <button onClick={()=>handleClick('ko')} >
              Korean
            </button>
            <button onClick={()=>handleClick('chi')} >
              Chinese
           </button>
          </nav>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <h3>{t('Thanks.1')}</h3>  <h3>{t('Why.1')}</h3> 
            </p>
          </header>
      </div>
    );
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
                <Footer/>
        </div>

    </div>
);

export default App;
