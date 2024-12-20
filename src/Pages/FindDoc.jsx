import Hero from "../Components/Hero";
import Card from "../Components/Card";

import TopBar from "../Components/TopBar";
const doctors = [
    {
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Dr. Rahul Sharma",
      expertise: "Cardiologist",
      experience: "15 years",
      languages: ["English", "Hindi"],
      videoConsultationRate: 1500, // in INR
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Dr. Priya Mehta",
      expertise: "Dermatologist",
      experience: "10 years",
      languages: ["English", "Gujarati"],
      videoConsultationRate: 1200, // in INR
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/men/65.jpg",
      name: "Dr. Ankit Verma",
      expertise: "Orthopedic",
      experience: "8 years",
      languages: ["English", "Marathi"],
      videoConsultationRate: 1000, // in INR
    },
  ];
  

function FindDoc(){
    return(
        <>
            <TopBar/>

            <Hero/>
            <div className="flex flex-wrap justify-center ">
            {doctors.map((details)=>(
                <Card  imageUrl={details.imageUrl} name={details.name} expertise={details.expertise} experience = {details.experience} languages={details.languages} fees={details.videoConsultationRate} />
            ))}
            </div>
            <div className="my-10"></div>
        </>
    )
}
export default FindDoc;