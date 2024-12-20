import { useState } from "react";

function Hero() {
    const [filters, setFilters] = useState({ expertise: "", gender: "", fees: "", language: "" });

    function handleExpertClick() {
        setFilters((prev) => ({ ...prev, expertise: "" }));
    }
    function handleExpertise(e) {
        const val = e.target.value;
        setFilters((prev) => ({ ...prev, expertise: val }));
    }

    function handleFeesClick() {
        setFilters((prev) => ({ ...prev, fees: "" }));
    }
    function handleFees(e) {
        const val = e.target.value;
        setFilters((prev) => ({ ...prev, fees: val }));
    }

    function handleGenderClick() {
        setFilters((prev) => ({ ...prev, gender: "" }));
    }
    function handleGender(e) {
        const val = e.target.value;
        setFilters((prev) => ({ ...prev, gender: val }));
    }

    function handleLanguageClick() {
        setFilters((prev) => ({ ...prev, language: "" }));
    }
    function handleLanguage(e) {
        const val = e.target.value;
        setFilters((prev) => ({ ...prev, language: val }));
    }

    return (
        <>
            {/* Hero Section */}
            <div className="bg-green-50 h-40 flex items-center justify-center flex-col text-center gap-y-4 px-4 sm:px-8">
                <h1 className="text-lg sm:text-xl md:text-2xl font-medium">
                    Find Expert Doctors For An In-Clinic Session Here
                </h1>
                <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-4">
                    <select className="px-4 py-3 border border-gray-300 shadow-md rounded-md text-sm sm:text-base">
                        <option>Location 1</option>
                        <option>Location 2</option>
                    </select>
                    <input
                        type="text"
                        placeholder="e.g. Doctor, Specialization, Clinic name"
                        className="px-4 w-full sm:w-96 border border-gray-300 shadow-md rounded-md py-3 text-sm sm:text-base"
                    />
                </div>
            </div>

            {/* Filters Section */}
            <div className="flex flex-wrap gap-4 justify-center mx-4 sm:mx-[10%] my-4">
                <select
                    className="bg-gray-200 px-4 py-2 text-gray-600 rounded-md text-sm sm:text-base"
                    onChange={handleExpertise}
                >
                    <option selected disabled>
                        Expertise
                    </option>
                    <option>Expertise 1</option>
                    <option>Expertise 2</option>
                    <option>Expertise 3</option>
                </select>
                <select
                    className="bg-gray-200 px-4 py-2 text-gray-600 rounded-md text-sm sm:text-base"
                    onChange={handleGender}
                >
                    <option selected disabled>
                        Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <select
                    className="bg-gray-200 px-4 py-2 text-gray-600 rounded-md text-sm sm:text-base"
                    onChange={handleFees}
                >
                    <option selected disabled>
                        Fees
                    </option>
                    <option>Fees 1</option>
                    <option>Fees 2</option>
                    <option>Fees 3</option>
                </select>
                <select
                    className="bg-gray-200 px-4 py-2 text-gray-600 rounded-md text-sm sm:text-base"
                    onChange={handleLanguage}
                >
                    <option selected disabled>
                        Language
                    </option>
                    <option>Language 1</option>
                    <option>Language 2</option>
                    <option>Language 3</option>
                </select>
                <select className="bg-gray-200 px-4 py-2 text-gray-600 rounded-md text-sm sm:text-base">
                    <option selected disabled>
                        All
                    </option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>

            {/* Selected Filters Section */}
            <div className="flex flex-wrap gap-2 justify-center mx-4 sm:mx-10">
                {filters.expertise && (
                    <button
                        className="bg-gray-200 px-4 py-2 text-gray-600 rounded-xl text-sm sm:text-base"
                        onClick={handleExpertClick}
                    >
                        {filters.expertise} X
                    </button>
                )}
                {filters.gender && (
                    <button
                        className="bg-gray-200 px-4 py-2 text-gray-600 rounded-xl text-sm sm:text-base"
                        onClick={handleGenderClick}
                    >
                        {filters.gender} X
                    </button>
                )}
                {filters.fees && (
                    <button
                        className="bg-gray-200 px-4 py-2 text-gray-600 rounded-xl text-sm sm:text-base"
                        onClick={handleFeesClick}
                    >
                        {filters.fees} X
                    </button>
                )}
                {filters.language && (
                    <button
                        className="bg-gray-200 px-4 py-2 text-gray-600 rounded-xl text-sm sm:text-base"
                        onClick={handleLanguageClick}
                    >
                        {filters.language} X
                    </button>
                )}
            </div>
        </>
    );
}

export default Hero;
