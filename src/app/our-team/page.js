import Team from "@/components/Team";

const TeamMembers = {
  directors: [
    {
      image: "/Image/Iftekhar-zobaed.jpg",
      name: "Md Iftekhar Zobaed",
      designation: "Chairman",
      descriptions:
        "Mr Md Iftekhar Zobaed is the Chairman of MRZ Group. After completion of his studies in Physics from Dhaka University...",
    },
    {
      image: "/Image/cmd-commodore-ziya-ahsan-sheikh.jpg",
      name: "Commodore Ziaul Ahsan Shaikh (TAS, psc, BN) (Retd)",
      designation: "Vice Chairman",
      descriptions:
        "Commodore (Retd) Ziaul Ahsan Shaikh is the Vice Chairman of MRZ Group. He served in the Bangladesh Navy...",
    },
    {
      image: "/Image/zubayer shahid.jpg",
      name: "Zubayr Shahid",
      designation: "Managing Director",
      descriptions:
        "Mr Zubayr Shahid is the Managing Director of MRZ Group. He graduated in Business & Marketing from Coventry University...",
    },
  ],
  Operations: [
    {
      image: "/Image/lt-golam-moula.png",
      name: "Lt. Golam Mowla (Retd)",
      designation: "Head of Military Procurement",
    },
    {
      image: "/Image/ataur-rahman.jpg",
      name: "Ataur Rahman (Ex-BD Navy)",
      designation: "Senior Manager (Ops)",
    },
    {
      image: "/Image/eng-shams.png",
      name: "Engr. Md Shams-E-Tabreez Azad",
      designation: "Lead Engineer",
    },
  ],
};

const page = ({ name, title, image }) => {
  return (
    <div>
      <div className="container place-items-center">
        <h1 className=" font-bold text-3xl text-center text-[#ED4B41]">
          BOARD OF DIRECTORS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TeamMembers.directors.map((member, idx) => (
            <div key={idx}>
              <Team image={member.image} name={member.name} title={member.designation}/>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1863AB] h-[300px] md:h-[200px] flex ">
        <div className="flex flex-col justify-between md:gap-0 gap-10 py-5 px-10 lg:py-0 items-center text-center lg:flex-row container border-b-8 border-[#ED4B41]">
          <div className="text-white space-y-4 text-start">
            {" "}
            <h1 className="text-2xl font-bold">
              Looking an Adequate Solution for your Company?
            </h1>
            <h3>Contact us today for free conslutaion or more information.</h3>
          </div>

          <div className="mr-32">
            <button className="px-5 py-2 border-2 font-bold border-white hover:text-[#ED4B41]">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
