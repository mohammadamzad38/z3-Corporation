const page = () => {
  return (
    <div className="">
      <div className="bg-[#0A0A0A] py-12">
        <div className="container px-8 space-y-3">
          <h1 className="text-3xl font-bold text-[#ED4B41]">
            OUR <span className="text-white">PRINCIPALS</span>
          </h1>
          <p className="">
            <a href="#" className="text-[#ED4B41]">Z3 Corporation</a> is the authorized distributor of
            NAFFCO (UAE), TRIGA by Honeywell (USA) and SHIELD (UK). Besides, we
            sell various other reputable brands through our principals, such as
            Tyco, Fike, Xtralis, Detector, Kent, Sauter, Cooper, etc. <br />
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
