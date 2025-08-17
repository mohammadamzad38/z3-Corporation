import Clients from "@/components/ItClient";
import ItService from "@/components/ItService";
import PageCover from "@/components/pageCover";

const page = () => {
  return (
    <div>
      <PageCover text={"IT Services"} />
      <div className="py-20 space-y-12">
        <h1 className="text-3xl font-bold text-center text-[#ED4B41]">
          Our It Services
        </h1>
        <ItService />
      </div>
      <div className="container space-y-16">
        <h1 className="text-3xl font-bold text-center text-[#ED4B41]">
          Our Valuable Clients
        </h1>
        <Clients />
      </div>

      <div className="bg-[#0A0A0A] py-12">
        <div className="container px-8">
          <p className="">
            Certifications and Awards Z3 Corporation has been recognized for its
            exceptional work in the field of fire and safety contracting,
            consultation and engineering services. <br />
            <br /> The company has been awarded several certifications,
            including ISO 9001:2015 for its provision of services. ISO has
            certified Z3 Corporation for supply, installation, commissioning,
            after-sales, repair & maintenance services of fire & safety
            equipment. <br /> <br /> Additionally, the company has received a
            Certification of Authorization from{" "}
            <a href="#" className="text-[#ED4B41]">
              NAFFCO
            </a>{" "}
            , SHIELD & various other global leaders. We are an active member of
            Electronics Safety & Security Association of Bangladesh (ESSAB)
            Certifications and Awards. <br />
            <br /> Z3 Corporation has received Excellent Contribution Award by
            NAFFCO in 2018. In 2020, we have been recognized as country’s most
            influential fire & safety service provider business by Arthokantha
            magazine.{" "}
            <a href="#" className="text-[#ED4B41]">
              Z3 Corporation{" "}
            </a>{" "}
            is also enlisted with Civil Aviation Authority of Bangladesh (CAAB)
            Certifications and Awards.
          </p>
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
