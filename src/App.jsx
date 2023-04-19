import styles from "./style";
import { Billing, Content, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
 

    <div className={`bg-primary mt-0 pt-0   w-full h-full object-cover  ${styles.flexStart}`}>
        <Hero />
    </div>
    
    <div className={` bg-primary   sm:bg-about-pattern ss:my-[32vh] sm:my-[2vh] my-[15vh] bg-Contain lg:bg-aboutus-pattern 
    bg-no-repeat ${styles.paddingX} ${styles.flexCenter}`}>
      <div >
        <Content />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
