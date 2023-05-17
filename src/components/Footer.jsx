import styles from "../style";
import {whitelogo, email, maps , mapmarker , phone} from "../assets";
import {footerLinks, socialMedia} from "../constants";

const Footer = () => (
    <section className={`${styles.flexCenter} mt-0 mb-0  flex-col`}>
        <div className={`flex md:flex-row flex-col 	 	 w-full `}>
            <div className="flex-[1]  flex flex-col flex-wrap justify-center       ">
                <img src={whitelogo} alt="Kepler" className="w-64  object-contain"/>
           
            </div>
          
            <div
                className="flex-[2]     flex flex-row  flex-wrap    ">
                <div className=" flex flex-col md:justify-end  justify-center md:mr-32 ml-0 mb-10    ">
                <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
                    Follow Us :
                </p>
                <div className="flex flex-col  mt-2   ">
           
  {socialMedia.map((social, index) => (
    <div  className="flex flex-row " key={social.id}>
      <img
        src={social.icon}
        alt={social.id}
        className={`w-[30px] h-[30px] rounded-lg object-contain cursor-pointer my-2 mr-4 border-2 p-2 border-white icontran `}
        onClick={() => window.open(social.link)}
      />
      <a href={social.link} className={`${styles.paragraph} mt-1.5 max-w-[312px]`}>{social.name}</a>
    </div>
  ))}
  
                </div>
                </div>
                </div>
                <div className=" flex-[1] flex flex-col  ">
                    <h6 className={`${styles.paragraph} mt-4 `}>Our Company :</h6>
                    <img
                        src={maps}
                        alt="maps"
                        className={`w-64 h-auto mt-5 mx-2 rounded-lg object-contain `}/>
                    <div className="flex flex-row">
                        <img
                            src={mapmarker}
                            alt="mapmarker"
                            className={`w-4 h-4 mt-5 mx-2 rounded-lg object-contain `}/>
                        <h6 className={`${styles.paragraph} mt-4 `}> Bureau 308 Megrine
 Business Center, Route Z4 Saint 
Gobain 2033 Megrine - Tunisie</h6>
                    </div>
                    <div className="flex flex-row">
                        <img
                            src={phone}
                            alt="phone"
                            className={`w-4 h-4 mt-5 mx-2 rounded-lg object-contain `}/>
                        <h6 className={`${styles.paragraph} mt-4 `}> (+216) 79 29 75 38</h6>
                    </div>
                </div>
            </div>
        

    </section>
);

export default Footer;
