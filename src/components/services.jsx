import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className={`mt-[20px] mx-[30px] lg:mt-[86px] lg:mx-[76px]`}>
      <div className="gradientTex">
        <h1
          className={`flex items-center font-clashbold font-semibold text-white text-[20px] leading-[30.75px] lg:text-[60px] lg:leading-[73.8px]`}
        >
          My Expertise <span className={`animate-bounce`}>🔥</span>
        </h1>
        <p
          className={`text-[#FFFFFF99] font-medium text-[15px] leading-[22.5px]  lg:text-[18px] lg:leading-[27px]`}
        >
          Areas where I bring deep technical experience and deliver top notch solutions
        </p>
      </div>

      {/* cards */}
      <div className="flex flex-col mt-[56px] gap-2 lg:mt-[56px] lg:flex lg:flex-wrap lg:flex-shrink-0 lg:justify-start lg:flex-row lg:items-center lg:gap-[24px]">
        {/* first cards */}
        <div
          className={`overflow-hidden flex flex-col gap-3 flex-nowrap justify-start md:flex md:flex-row md:flex-wrap md:justify-arounds md:gap-4 lg:flex lg:flex-col lg:gap-[24px]`}
        >
          <motion.div
            whileHover={{ scale: 0.99 }}
            className={`bg-gradient-to-l max-w-max to-[#F0FEFF4D] from-[#F0FEFF00] pl-0.5 pt-0.5`}
          >
            <motion.div
              whileHover={{ scale: 0.99 }}
              className={`bg-[#0A1C20] text-[#FFFFFF99] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0`}
            >
              <h4
                className={`font-semibold text-white font-clashbold text-[20px] leading-[24.6px] max-w-[156px] lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]`}
              >
                WEB DEVELOPMENT
              </h4>
              <p
                className={`font-normal text-[13px] leading-[19.5px] mt-4 max-w-[308px] lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
              >
                I build working websites using TailwindCss,
                JavaScript, ReactJs, NextJs & Typescript.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.99 }}
            className="bg-gradient-to-r max-w-[369.808px] lg:max-w-[642px] to-[#F0FEFF4D] from-[#F0FEFF00] pr-0.5 pt-0.5"
          >
            <motion.div
              whileHover={{ scale: 0.99 }}
              className={`bg-[#0A1C20] shrink-0 text-[#FFFFFF99] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px]`}
            >
              <h4
                className={`font-semibold uppercase text-white text-[20px] leading-[24.6px] font-clashbold max-w-[156px] lg:max-w-[400px] lg:text-[40px] lg:leading-[49.2px]`}
              >
                Smart Contract Engineering
              </h4>
              <p
                className={`font-normal text-[13px] leading-[19.5px] mt-4 max-w-[308px] lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
              >
                Writing and deploying secure smart contracts in Solidity for DeFi, token systems, and dApps.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.99 }}
            className="bg-gradient-to-l max-w-[369.808px] lg:max-w-[642px] to-[#F0FEFF4D] from-[#F0FEFF00] pl-0.5 pt-0.5"
          >
            <motion.div
              whileHover={{ scale: 0.99 }}
              className={`bg-[#0A1C20] text-[#FFFFFF99] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0`}
            >
              <h4
                className={`font-semibold uppercase text-[20px] leading-[24.6px] max-w-[156px] text-white font-clashbold lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]`}
              >
                API & AI Integrations
              </h4>
              <p
                className={`font-normal text-[13px] leading-[19.5px] max-w-[308px] mt-4 lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
              >
                Integrating blockchain APIs, Firebase, and AI models to create
                intelligent, data-driven, and interactive apps.
              </p>
            </motion.div>
          </motion.div>
          <motion.div className="bg-gradient-to-r max-w-[369.808px] lg:max-w-[642px] to-[#F0FEFF4D] from-[#F0FEFF00] pr-0.5 pt-0.5">
            <motion.div
              whileHover={{ scale: 0.99 }}
              className={`bg-[#0A1C20] text-[#FFFFFF99] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0`}
            >
              <h4
                className={`font-semibold uppercase text-[20px] leading-[24.6px] max-w-[156px] text-white font-clashbold lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]`}
              >
                Technical Leadership
              </h4>
              <p
                className={`font-normal text-[13px] leading-[19.5px] max-w-[308px] ensure mt-4 lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
              >
                Driving projects from idea to MVP, leading hackathon builds,
                and scaling blockchain apps for production.
              </p>
            </motion.div>
          </motion.div>

          <motion.div className="bg-gradient-to-r max-w-[369.808px] lg:max-w-[642px] to-[#F0FEFF4D] from-[#F0FEFF00] pr-0.5 pt-0.5">
            <motion.div
              whileHover={{ scale: 0.99 }}
              className={`bg-[#0A1C20] text-[#FFFFFF99] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0`}
            >
              <h4
                className={`font-semibold uppercase text-[20px] leading-[24.6px] max-w-[156px] text-white font-clashbold lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]`}
              >
                Version Control
              </h4>
              <p
                className={`font-normal text-[13px] leading-[19.5px] max-w-[308px] ensure mt-4 lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
              >
                Using version control systems like Git to collaborate with other
                developers and manage code changes effectively.
              </p>
            </motion.div>

            <motion.div className="bg-gradient-to-r max-w-[369.808px] lg:max-w-[642px] to-[#F0FEFF4D] from-[#F0FEFF00] pr-0.5 pt-0.5">
              <motion.div
                whileHover={{ scale: 0.99 }}
                className={`bg-[#0A1C20] text-[#FFFFFF99] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0`}
              >
                <h4
                  className={`font-semibold uppercase text-[20px] leading-[24.6px] max-w-[156px] text-white font-clashbold lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]`}
                >
                  Dapp Development
                </h4>
                <p
                  className={`font-normal text-[13px] leading-[19.5px] max-w-[308px] ensure mt-4 lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
                >
                  Building  and deploying decentralized applications with React, Next.js,
                  TypeScript with expertise in Solidity on various blockchain platforms.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
       
      </div>
    </section>
  );
};

export default Services;
