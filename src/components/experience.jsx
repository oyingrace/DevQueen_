import Resume from "./resume";
import { ExpCircle } from "./svgs";
import resumeUrl from "../utils/grace-odah.pdf";

const Experience = () => {
  // console.log("resume", resumeUrl)

  return (
    <>
      <div className={`flex flex-col ml-3 lg:items-end`}>
        <div className="font-pop">
          <h2
            className={`h-full flex items-center font-clashbold text-white text-[20px] font-semibold lg:text-[50px] lg:leading-[49.2px]`}
          >
            Experience 
          </h2>
          <p
            className={`font-medium text-[#FFFFFF99] text-[15px] leading-[22.5px] text-left lg:text-[20px] lg:leading-[30px]]`}
          >
            some of my experiences accross various roles
          </p>
        </div>
        <div className="flex flex-row relative z-[100]  lg:justify-between mt-[30px]">
          <div className="w-0.5 h-[940px] lg:h-[740px] bg-[#1ED7601A]"></div>
          <div className={`flex flex-col space-y-[60px]`}>
            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Chief Technical Officer <span className="">-</span> &nbsp;
                  <span className="italic text-xs md:text-base text-[#FFFFFF99]">
                     Feb 2025 - Sept 2025
                  </span>
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}
                >
                  Hammet Labs
                </p>
                <h5
                  className={`text-[#FFFFFF99] font-medium mt-[20px] max-w-[300px] md:max-w-md lg:mt-[19px] lg:max-w-[651px] lg:text-[18px] lg:leading-[27px]`}
                >
                  I lead the technical vision and development at Hammet Labs, building AI-powered learning platforms that merge education and Web3. My focus is on architecting scalable systems, guiding product direction, and translating ideas into innovative, user-centered solutions.
                </h5>
              </div>
            </div>
            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Blockchain contributor <span>-</span>&nbsp;
                  <span className="text-xs md:text-base italic text-[#FFFFFF99]">
                    Sept 2025 - till date
                  </span>
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}
                >
                  H.E.R. DAO
                </p>
                <h5
                  className={`text-[#FFFFFF99] font-medium mt-[20px] max-w-[300px] md:max-w-md lg:mt-[19px] lg:max-w-[651px] lg:text-[18px] lg:leading-[27px]`}
                >
                 Contributed to advocacy content, community research and strategy, focusing on the role of Web3 communities in driving inclusion, education, and empowerment.
                </h5>
              </div>
            </div>
            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Blockchain Engineer&nbsp;
                  <span className="">-</span> &nbsp;
                  <span className="italic text-xs md:text-base text-[#FFFFFF99]">
                   Nov 2024 - May 2025
                  </span>
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}
                >
                  OminiPay, Lagos, NG.
                </p>
                <h5
                  className={`text-[#FFFFFF99] font-medium mt-[20px] max-w-[300px] md:max-w-md lg:mt-[19px] lg:max-w-[651px] lg:text-[18px] lg:leading-[27px]`}
                >
                  I work as a developer with the responsibility of
                  integrating Solana wallet functionality into a mobile app.
                </h5>
              </div>
            </div>
            {/* <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Web Developer
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}
                >
                  Flowday
                </p>
                <h5
                  className={`text-[#FFFFFF99] font-medium mt-[20px] max-w-[300px] md:max-w-md lg:mt-[19px] lg:max-w-[651px] lg:text-[18px] lg:leading-[27px]`}
                >
                  I work as a frontend developer integrating the figma design
                  under a senior developer, I aced my skills of connecting
                  frontend to backend.
                </h5>
              </div>
            </div> */}
            <div className="relative flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Creative Web Developer
                </h3>
              
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}
                >
                  Konoha
                </p>
                <h5
                  className={`text-[#FFFFFF99] font-medium mt-[20px] max-w-[300px] md:max-w-md lg:mt-[19px] lg:max-w-[651px] lg:text-[18px] lg:leading-[27px]`}
                >
                  I worked as a web developer building the system of the
                  university, making students onboarding seamless.
                </h5>
              </div>
            </div>
            {/* RESUME */}
            <Resume
              pdfUrl={resumeUrl}
              fileName="Grace-Odah.pdf"
              buttonText="Download Resume"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
