import {useState} from "react";

import {close, logo, menu} from "../assets";
import {navLinks} from "../constants";

const Navbar = () => {
    const [active,
        setActive] = useState("Home");
    const [toggle,
        setToggle] = useState(false);

    return (
        <nav className="w-full flex py-3 justify-evenly	 items-center navbar py-0 my-5">
            <img
                src={logo}
                alt="hoobank"
                className=" max-w-[50vw] max-h-[13vh] mt-5  xl:ml-[0vw] ilg:ml-[5vw] lg:ml-[8vw] md:ml-[14vw] ml-[5vw] mt-2"/>

            <ul
                className="list-none sm:flex hidden justify-end items-center m-2      xl:mr-20 ilg:mr-16 lg:mr-0 md:mr-0 mr-0 flex-1 NavBarbg py-5 pr-10 xl:max-w-3xl ilg:max-w-2xl lg:max-w-xl md:max-w-lg max-w-lg max-h-[70px] 	">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[18px] ${active === nav.title
                        ? "text-slate-200"
                        : "text-white"} ${index === navLinks.length - 1
                            ? "mr-0"
                            : "mr-10"}`}
                        onClick={() => setActive(nav.title)}>
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-col md:flex-row justify-end items-center ">
            <div class="flex items-center mx-5 py-5 md:py-0">
</div>
                <img
                    src={toggle
                    ? close
                    : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain ml-48"
                    onClick={() => setToggle(!toggle)}/>
 
                <div
                    className={`${ !toggle
                    ? "hidden"
                    : "flex"} md:flex md:flex-grow bg-black-gradient p-6 rounded-xl`}>
                    <ul className="ltext-lg md:flex md:ml-auto">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title
                                ? "text-white"
                                : "text-dimWhite"} ${index === navLinks.length - 1
                                    ? "mb-0"
                                    : "mb-4"}`}
                                onClick={() => setActive(nav.title)}>
                                <a href={`#${nav.id} w-full md:w-auto p-5 inline-block bg-blue-800 border-b-4 border-white hover:border-white hover:bg-blue-800`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
