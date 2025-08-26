const Contact = ({ heading, subHeading, contact, link }) => {
  return (
    <div className="bg-[#1863AB] h-[300px] md:h-[200px] flex ">
      <div className="flex flex-col justify-between md:gap-0 gap-10 py-5 px-10 lg:py-0 items-center text-center lg:flex-row container border-b-8 border-[#ED4B41]">
        <div className="text-white space-y-4 text-start">
          <p className="text-2xl font-bold">{heading}</p>
          <p>{subHeading}</p>
        </div>

        <div className="mr-32">
          <a
            href={"/contact-us"}
            className="px-5 py-2 border-2 font-bold border-white hover:text-[#ED4B41]"
          >
            {contact}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
