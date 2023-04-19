import { clients } from "../constants";
import styles from "../style";
import {   USAIDLogo,
  UTICALogo,
  ma3anLogo,
  FRIEDRICHLogo,
  fhiLogo,
  FAOLogo,
  CFADLogo
 } from "../assets";
const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[132px] min-w-[70px] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[132px] h-[9vh] w-[70px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
