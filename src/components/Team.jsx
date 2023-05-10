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
const Team = () => (
    <div class="flex flex-wrap mt-10">

        <div class="w-full md:w-6/12 lg:w-[11.5rem] mb-6 px-6 sm:px-6 lg:px-2">
            <div class="flex flex-col">

                <a href="#" class="mx-auto">
                    <img
                        class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
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
        <div class="w-full md:w-6/12 lg:w-[11.5rem] mb-6 px-6 sm:px-6 lg:px-2">
            <div class="flex flex-col">
                <a href="#" class="mx-auto">
                    <img
                        class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={Team2}></img>
                </a>

                <div class="text-center mt-6">
                    <h1 class="text-gray-900 text-xl font-bold mb-1">
                        Rami Saadaoui
                    </h1>

                    <div class="text-gray-700 font-light mb-2">
                        Project Manager
                    </div>

                </div>
            </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-[11.5rem] mb-6 px-6 sm:px-6 lg:px-2">
            <div class="flex flex-col">
                <a href="#" class="mx-auto">
                    <img
                        class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={Team6}></img>
                </a>

                <div class="text-center mt-6">
                    <h1 class="text-gray-900 text-xl font-bold mb-1">
                        Ahmed Ben Rached
                    </h1>

                    <div class="text-gray-700 font-light mb-2">

                        Event Manager
                    </div>

                </div>
            </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-[11.5rem] mb-6 px-6 sm:px-6 lg:px-2">
            <div class="flex flex-col">
                <a href="#" class="mx-auto">
                    <img
                        class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={Team4}></img>
                </a>

                <div class="text-center mt-6">
                    <h1 class="text-gray-900 text-xl font-bold mb-1">
                        Jihena Dridi
                    </h1>

                    <div class="text-gray-700 font-light mb-2">
                        Reservation and Ticketing Manager
                    </div>

                </div>
            </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-[11.5rem] mb-6 px-6 sm:px-6 lg:px-2">
            <div class="flex flex-col">
                <a href="#" class="mx-auto">
                    <img
                        class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
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
        <div class="w-full md:w-6/12 lg:w-[11.5rem] mb-6 px-6 sm:px-6 lg:px-2">
            <div class="flex flex-col">
                <a href="#" class="mx-auto">
                    <img
                        class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={Team1}></img>
                </a>

                <div class="text-center mt-6">
                    <h1 class="text-gray-900 text-xl font-bold mb-1">
                        Khaoula Ghazouani
                    </h1>

                    <div class="text-gray-700 font-light mb-2">
                        Director of Event Operations
                    </div>

                </div>
            </div>
        </div>
    </div>

);

export default Team;