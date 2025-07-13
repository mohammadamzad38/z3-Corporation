import Team from "@/components/Team";
import Image from "next/image";

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
    {
      image: "/Image/lt-motlub.png",
      name: "Lt Col Md Motlub Ahmed, afwc, psc, MBA (Retd)",
      designation: "Director",
      descriptions:
        "Mr Zubayr Shahid is the Managing Director of MRZ Group. He graduated in Business & Marketing from Coventry University...",
    },
    {
      image: "/Image/captain-behzad.png",
      name: "Captain K M Behzad Akbar (psc, BN) (Retd)",
      designation: "Director",
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
    {
      image: "/Image/Engr.-Amit-Asif-.jpg",
      name: "Engr. Amit Asif (Electro-Mechanical)",
      designation: "Manager (Operations & Business Development)",
    },
  ],
  commercials: [
    {
      image: "/Image/Md.-Mamun-Ar-Rashid.jpg",
      name: "Md Mamun Ar Rashid",
      designation: "Executive, Commercial",
    },
    {
      image: "/Image/Abdul-awal.png",
      name: "Md Abdul Awal",
      designation: "Executive, Accounts",
    },
  ],
  engineers: [
    {
      image: "/Image/Eng.-Abdullah-Al-Noman.jpg",
      name: "Engr. Abdullah Al Noman",
      designation: "Senior Engineer (Design & System)",
    },
    {
      image: "/Image/Engr.-Md-Fazlul-Haque.jpg",
      name: "Engr. Md Fazlul Haque",
      designation: "Design & System Engineer",
    },
    {
      image: "/Image/Engr-Md-Fazlul-Karim.jpg",
      name: "Engr. Md Fazlul Karim",
      designation: "Design & System Engineer",
    },
    {
      image: "/Image/razuan-hamid.png",
      name: "Engr. Md. Razuan Hamid",
      designation: "Design & System Engineer",
    },
    {
      image: "/Image/Engr.-Md-Asaduzzaman.jpg",
      name: "Engr. Md Asaduzzaman",
      designation: "Design & System Engineer",
    },
    {
      image: "/Image/Engr.-Abdullah-Al-Mamun.jpg",
      name: "Engr. Abdullah Al Mamun",
      designation: "Design & System Engineer",
    },
  ],
  technical: [
    {
      image: "/Image/abdur-rahim.png",
      name: "Abdur Rahim",
      designation: "Senior Technician of Fire Detection System",
    },
    {
      image: "/Image/Emdadul-haque.png",
      name: "Emdadul Hoque",
      designation: "Senior Technician of Fire Detection System",
    },
    {
      image: "/Image/Nazim-uddin.png",
      name: "Md Nizam Uddin Mizi",
      designation: "Technician of Fire Detection System",
    },
    {
      image: "/Image/Khairul-islam.png",
      name: "Md Khairul Islam",
      designation: "Technician of Fire Detection System",
    },
    {
      image: "/Image/Rashidul-rahman.png",
      name: "Md Rashidul Rahman",
      designation: "Technician of Fire Detection System",
    },
  ],
  logistics: [
    {
      image: "/Image/Rayhan.png",
      name: "Md Rayhan Hossain",
      designation: "Safety Officer",
    },
    {
      image: "/Image/Mahin.jpg",
      name: "Mahin Uddin",
      designation: "Procurement Assistant",
    },
    {
      image: "/Image/Rasel.png",
      name: "Rasel Hossain",
      designation: "Fire Door Installation Team Leader",
    },
    {
      image: "/Image/Shahed.png",
      name: "Md Shahed",
      designation: "Fire Door Installation Support Staff",
    },
    {
      image: "/Image/Shanto.png",
      name: "Md Shanto",
      designation: "Office Support Staff",
    },
    {
      image: "/Image/Shahadat.jpg",
      name: "Md Shahadat Hossain",
      designation: "Office Support Staff",
    },
  ],
};

const page = ({ name, title, image }) => {
  return (
    <div>
      <div className="relative flex justify-center h-[100px] md:h-[200px] w-screen">
        <Image
          src="/Image/z3-corporation-cover.png"
          alt="Z3 cover Image"
          fill
          className="object-fill"
        />
        <div className="absolute top-10 md:top-30 left-[20%]">
          <h1 className="text-xl md:text-3xl border-b-4 border-[#ED4B41] text-white font-bold ">
            OUR TEAM
          </h1>
        </div>
      </div>
      <div className="container place-items-center py-15">
        <h1 className=" font-bold text-xl lg:text-3xl pb-15 text-center text-[#F26F21]">
          BOARD OF DIRECTORS
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
          {TeamMembers.directors.map((member, idx) => (
            <div key={idx}>
              <Team
                image={member.image}
                name={member.name}
                title={member.designation}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container place-items-center py-15">
        <h1 className=" font-bold text-xl lg:text-3xl pb-15 text-center text-[#F26F21]">
          MANAGEMENT & OPERATIONS
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
          {TeamMembers.Operations.map((opMember, idx) => (
            <div key={idx}>
              <Team
                image={opMember.image}
                name={opMember.name}
                title={opMember.designation}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container place-items-center py-15">
        <h1 className=" font-bold text-3xl lg:text-3xl pb-15 text-center text-[#F26F21]">
          COMMERCIAL & ACCOUNTS
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
          {TeamMembers.commercials.map((member, idx) => (
            <div key={idx}>
              <Team
                image={member.image}
                name={member.name}
                title={member.designation}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container place-items-center py-15">
        <h1 className=" font-bold text-3xl lg:text-3xl pb-15 text-center text-[#F26F21]">
          ENGINEERING DEPARTMENT
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
          {TeamMembers.engineers.map((member, idx) => (
            <div key={idx}>
              <Team
                image={member.image}
                name={member.name}
                title={member.designation}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container place-items-center py-15">
        <h1 className=" font-bold text-3xl lg:text-3xl pb-15 text-center text-[#F26F21]">
          TECHNICAL DEPARTMENT
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
          {TeamMembers.technical.map((member, idx) => (
            <div key={idx}>
              <Team
                image={member.image}
                name={member.name}
                title={member.designation}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container place-items-center py-15">
        <h1 className=" font-bold text-3xl lg:text-3xl pb-15 text-center text-[#F26F21]">
          LOGISTICS DEPARTMENT
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
          {TeamMembers.logistics.map((member, idx) => (
            <div key={idx}>
              <Team
                image={member.image}
                name={member.name}
                title={member.designation}
              />
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
