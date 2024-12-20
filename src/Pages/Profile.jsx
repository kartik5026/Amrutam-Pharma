import { useLocation } from "react-router";
import TopBar from "../Components/TopBar";

function Profile() {
    const { state } = useLocation();
    const { imgUrl, name, expertise } = state || {};
    console.log(imgUrl);

    return (
        <>
            <TopBar />
            <div className="justify-center flex px-4 sm:px-0">
                <div className="bg-green-50 w-full sm:w-[85%] md:w-[80%] h-auto md:h-52 flex justify-end flex-col mt-10 rounded-t-xl border border-gray-300 shadow-lg">
                    <div className="bg-yellow-50 w-full h-auto md:h-36 flex flex-col md:flex-row justify-start gap-y-4 md:gap-x-3 px-5 sm:px-8 md:px-10 py-4">
                        <div className="my-[-40px] mx-auto md:mx-10 flex-shrink-0 md:block hidden">
                            <img
                                className="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover"
                                src={imgUrl}
                                alt="Profile"
                            />
                        </div>
                        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">{name}</h1>
                            <h1 className="text-sm sm:text-base md:text-lg">{expertise}</h1>
                            <h1 className="text-sm sm:text-base md:text-lg">4.2 🌟</h1>
                        </div>
                        <div className="flex justify-center md:justify-start w-full md:w-auto gap-x-6 sm:gap-x-8 md:gap-x-10">
                            <div className="flex flex-col items-center">
                                <p className="text-sm sm:text-base md:text-lg">Followers</p>
                                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">800k</h1>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-sm sm:text-base md:text-lg">Following</p>
                                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">100</h1>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-sm sm:text-base md:text-lg">Posts</p>
                                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">200</h1>
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-full md:w-auto mt-4 md:mt-0">
                            <button className="bg-green-700 text-white px-6 sm:px-8 md:px-8 py-2 text-sm sm:text-base md:text-lg rounded-md">
                                Book An Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-10 px-4 sm:px-0">
                <div className="flex flex-col md:flex-row w-full sm:w-[85%] md:w-[80%] gap-y-4 md:gap-x-4">
                    <div className="border shadow-lg w-full md:w-1/2 h-64 rounded-lg text-center p-4">
                        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">Other Details</h1>
                    </div>
                    <div className="border shadow-lg w-full md:w-1/2 h-64 rounded-lg text-center p-4">
                        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">More Details</h1>
                    </div>
                </div>
            </div>
            <div className="mt-10">

            </div>
        </>
    );
}

export default Profile;
