import { Link } from "react-router";

function TopBar() {
    function handleClick() {
        alert("Handle it in backend");
    }
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-20 bg-yellow-50 shadow-md px-4 sm:px-10 py-4 sm:py-0">
            {/* Logo Section */}
            <div className="mb-4 sm:mb-0">
                <a href="/"><h1 className="text-2xl sm:text-3xl text-green-700 font-semibold text-center sm:text-left">
                    AMRUTAM
                </h1>
                </a>
            </div>

            {/* Links Section */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mb-4 sm:mb-0">
                <Link
                    to={"/home"}
                    className="text-green-700 font-semibold text-base sm:text-xl text-center"
                >
                    Home
                </Link>
                <Link
                    to={"/find"}
                    className="text-green-700 font-semibold text-base sm:text-xl text-center"
                >
                    Find Doctors
                </Link>
                <Link
                    to={"/about"}
                    className="text-green-700 font-semibold text-base sm:text-xl text-center"
                >
                    About
                </Link>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button
                    className="bg-green-700 text-white border px-4 py-2 rounded-md text-base sm:text-lg"
                    onClick={handleClick}
                >
                    Login
                </button>
                <button
                    className="bg-green-700 text-white border px-4 py-2 rounded-md text-base sm:text-lg"
                    onClick={handleClick}
                >
                    SignUp
                </button>
            </div>
        </div>
    );
}

export default TopBar;
