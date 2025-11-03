import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import PageCover from "@/components/pageCover";

const page = () => {
  
  return (
    <div>
      <PageCover text={"Certifications and Awards"} />

      <div className="container">
        <h1 className="text-sm md:text-xl lg:text-3xl text-[#ED4B41] text-center mt-10 font-bold">
          OUR CERTIFICATIONS & AWARDS
        </h1>
        <Certifications />
      </div>

      <div className="bg-[#0A0A0A] text-white py-12">
        <div className="container px-8 space-y-3">
          <h1 className="text-3xl font-bold text-[#ED4B41]">
            CERTIFICATIONS and AWARDS
          </h1>
          <p>
            Certifications and Awards Z3 Corporation has been recognized for its
            exceptional work in the field of fire and safety contracting,
            consultation and engineering services. <br />
            <br /> The company has been awarded several certifications,
            including ISO 9001:2015 for its provision of services. ISO has
            certified Z3 Corporation for supply, installation, commissioning,
            after-sales, repair & maintenance services of fire & safety
            equipment. <br /> Additionally, the company has received a
            Certification of Authorization from{" "}
            <a href="#" className="text-[#ED4B41]">
              NAFFCO
            </a>
            , SHIELD & various other global leaders. We are an active member of
            Electronics Safety & Security Association of Bangladesh (ESSAB)
            Certifications and Awards. <br />
            <br /> Z3 Corporation has received Excellent Contribution Award by
            NAFFCO in 2018. In 2020, we have been recognized as country’s most
            influential fire & safety service provider business by Arthokantha
            magazine.{" "}
            <a href="#" className="text-[#ED4B41]">
              Z3 Corporation
            </a>{" "}
            is also enlisted with Civil Aviation Authority of Bangladesh (CAAB)
            Certifications and Awards.
          </p>
        </div>
      </div>

      <Contact
        heading={" Looking an Adequate Solution for your Company?"}
        subHeading={
          "Contact us today for free conslutaion or more information."
        }
        contact={"Get In Touch"}
      />
    </div>
  );
};

export default page;
