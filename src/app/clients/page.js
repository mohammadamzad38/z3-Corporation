import Contact from "@/components/Contact";
import PageCover from "@/components/pageCover";
import PromotedBrands from "@/components/PromotedBrands";

const page = () => {
  return (
    <div>
      <PageCover text={"Brands we sell / Promote"} />

      <div className="container">
        <PromotedBrands />
      </div>

      <div className="bg-[#0A0A0A] py-12">
        <div className="container px-8 space-y-3">
          <h1 className="text-3xl font-bold text-[#ED4B41]">
            OUR <span className="text-white">PRINCIPALS</span>
          </h1>
          <p className="">
            <a href="#" className="text-[#ED4B41]">
              Z3 Corporation
            </a>{" "}
            is the authorized distributor of NAFFCO (UAE), TRIGA by Honeywell
            (USA) and SHIELD (UK). Besides, we sell various other reputable
            brands through our principals, such as Tyco, Fike, Xtralis,
            Detector, Kent, Sauter, Cooper, etc. <br />
            <br /> At Z3 Corporation, we understand the importance of fire
            safety and the need for reliable protection solutions. That’s why we
            partnered with only world’s most trusted brands – NAFFCO, SHIELD and
            TRIGA to offer a wide range of fire protection solutions including
            fire alarms, fire suppression systems, emergency lighting and fire
            extinguishers. We also provide maintenance and after-sales services
            on behalf of our brands to ensure that their products are in proper
            working condition and to ensure compliance with local fire codes and
            regulations. <br />
            <br /> Our commitment to quality makes us a trusted partner for
            businesses and organizations of all sizes, from small retail shops
            to large industrial facilities. We have been involved in many
            prestigious projects, including government buildings, airports,
            hospitals, and more. <br />
            <br /> In summary, Z3 Corporation has chosen its partners based on
            unwavering reputation and reliability as we believe that when it
            comes to life and property safety, we should never compromise on
            quality.
          </p>
        </div>
      </div>
      
      <Contact
        heading={"Looking an Adequate Solution for your Company?"}
        subHeading={
          "Contact us today for free conslutaion or more information."
        }
        contact={"Get In Touch"}
      />
    </div>
  );
};

export default page;
