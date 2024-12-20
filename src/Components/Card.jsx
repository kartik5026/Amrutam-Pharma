import { Link } from "react-router-dom";

function Card(props) {
    const { imageUrl, name, expertise, experience, languages, fees } = props;

    return (
        <>
            <div className="border py-8 rounded-3xl w-[90%] sm:w-[60%] md:w-1/3 lg:w-1/4 text-center text-gray-500 shadow-xl bg-yellow-50 scale-95 hover:scale-100 transition-all ease-in-out duration-300 mx-auto">
                {/* Image Section */}
                <img
                    className="mx-auto rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover"
                    src={imageUrl}
                    alt="Profile"
                />
                <h1 className="text-lg sm:text-xl text-black font-semibold mt-4">{name}</h1>
                <p className="text-sm sm:text-base">{expertise}</p>
                <p className="text-sm sm:text-base">{experience} years of experience</p>

                {/* Languages Section */}
                <div className="mt-2 text-sm sm:text-base">
                    Speaks:
                    {languages.map((lang, index) => (
                        <span key={index} className="mx-1">
                            {lang}
                        </span>
                    ))}
                </div>

                {/* Fees Section */}
                <div className="flex justify-center gap-x-2 mt-4">
                    <p className="border shadow-md p-2 sm:p-4 text-green-700 rounded-lg text-sm sm:text-base">
                        Video Fees: {fees}
                    </p>
                    <p className="border shadow-md p-2 sm:p-4 text-green-700 rounded-lg text-sm sm:text-base">
                        Chat Free
                    </p>
                </div>

                {/* Buttons Section */}
                <div className="my-4">
                    <Link
                        to={"/profile"}
                        state={{
                            imgUrl: imageUrl,
                            name: name,
                            expertise: expertise,
                        }}
                    >
                        <button className="px-4 py-2 rounded-lg bg-white text-black w-[90%] sm:w-[80%] border text-sm sm:text-base">
                            View Profile
                        </button>
                    </Link>
                    <button
                        className="px-4 py-2 rounded-lg bg-green-700 text-white w-[90%] sm:w-[80%] border my-2 text-sm sm:text-base"
                        onClick={() => alert("Handle Consultation Page")}
                    >
                        Consult
                    </button>
                </div>
            </div>
        </>
    );
}

export default Card;
