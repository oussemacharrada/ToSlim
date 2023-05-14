import styles from "../style";
import {whitelogo, email, maps , mapmarker , phone} from "../assets";
import {footerLinks, socialMedia} from "../constants";

const Footer = () => (
    <section className={`${styles.flexCenter} mt-0 mb-0  flex-col`}>
        <div className={`flex md:flex-row flex-col 	 	 w-full `}>
            <div className="flex-[1] md:w-1/5 w-full flex flex-col flex-wrap justify-end    lg:mt-20 md:mt-48 lg:mt-14 ">
                <img src={whitelogo} alt="Kepler" className="w-64  object-contain"/>
           
            </div>
          
            <div
                className="w-3/5 flex flex-row  flex-wrap   ">
                <div className=" flex flex-col justify-end md:ml-80 ml-0 mb-10    ">
                <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
                    Follow Us :
                </p>
                <div className="flex flex-row mt-2   ">
                    {socialMedia.map((social, index) => (<img
                        key={social.id}
                        src={social.icon}
                        alt={social.id}
                        className={`w-[30px] h-[30px] rounded-lg object-contain cursor-pointer ${index !== socialMedia.length - 1
                        ? "mr-6"
                        : "mr-0"} border-2 p-2 border-white icontran `}
                        onClick={() => window.open(social.link)}/>))}
                </div>
                </div>
                </div>
                <div className=" flex flex-col   md:w-1/5 w-full">
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
