import { FunctionComponent } from "react";
import AnchorLink from "./basic/AnchorLink";

const Footer : FunctionComponent = () => {

    return (
        <footer className="self-stretch bg-royalblue-100 h-auto flex flex-row py-[31px] px-[69px] box-border items-center justify-between text-mini text-night-ghost-text font-public-sans ">
          <div className="self-stretch flex-1 flex flex-col items-center justify-between sm:self-stretch sm:h-auto sm:gap-[0px]">
            <div className="self-stretch flex flex-row items-start justify-between flex-wrap gap-[20px]">
              <div className="w-[248px] flex flex-col items-start justify-start gap-[24px]">
                <div className="relative box-border w-40 h-8 text-base text-gainsboro-100 font-public-sans border-b-[1px] border-solid border-gainsboro-100">
                  <div className="absolute top-[0px] left-[0px] uppercase font-extrabold">
                    HELP
                  </div>
                </div>
                <a className="[text-decoration:none] relative font-semibold text-[inherit]">
                  <AnchorLink text="Support" />
                </a>
                <div className="relative w-[232.88px] h-[18px]">
                  <a className="[text-decoration:none] absolute top-[1px] left-[0px] font-semibold text-[inherit]">
                    <AnchorLink text="System status" />
                  </a>
                </div>
              </div>
              <div className="w-[248px] flex flex-col items-start justify-start gap-[24px] text-base">
                <div className="relative box-border w-40 h-8 text-gainsboro-100 font-public-sans border-b-[1px] border-solid border-gainsboro-100">
                  <div className="absolute top-[0px] left-[0px] uppercase font-extrabold">
                    PLATFORM
                  </div>
                </div>
                <a className="[text-decoration:none] relative text-mini font-semibold text-[inherit]">
                <AnchorLink text="Security" />
                </a>
                <div className="relative w-[232.89px] h-[18px]">
                  <a className="[text-decoration:none] absolute top-[-1px] left-[0px] font-semibold text-[inherit]">
                  <AnchorLink text="FAQs" />
                  </a>
                </div>
              </div>
              <div className="w-[248px] flex flex-col items-start justify-start gap-[24px]">
                <div className="relative box-border w-[167px] h-8 text-base text-gainsboro-100 font-public-sans border-b-[1px] border-solid border-gainsboro-100 lg:items-start lg:justify-start">
                  <div className="absolute top-[0px] left-[0.33px] uppercase">
                    <span className="font-extrabold">ABOUT</span>
                    <span className="font-extrabold font-public-sans ">
                      {" "}
                      US
                    </span>
                  </div>
                </div>
                <a className="[text-decoration:none] relative font-semibold text-[inherit]">
                <AnchorLink text="Company" />
                </a>
                <a className="[text-decoration:none] relative font-semibold text-[inherit]">
                <AnchorLink text="Careers" />
                </a>
                <div className="relative w-[232.89px] h-[18px]">
                  <a className="[text-decoration:none] absolute top-[1px] left-[0px] font-semibold text-[inherit]">
                  <AnchorLink text="Newsroom" />
                  </a>
                </div>
              </div>
              <div className="w-[248px] flex flex-col items-start justify-start gap-[24px] font-public-sans sm:w-[167px] sm:flex sm:flex-wrap">
                <div className="relative box-border w-40 h-8 text-base text-gainsboro-100 border-b-[1px] border-solid border-gainsboro-100">
                  <div className="absolute top-[0px] left-[0px] uppercase font-extrabold">
                    LEGAL
                  </div>
                </div>
                <a className="[text-decoration:none] relative font-medium text-[inherit]">
                <AnchorLink text="Terms of service" />
                </a>
                <a className="[text-decoration:none] relative font-medium text-[inherit]">
                <AnchorLink text="Terms of use" />
                </a>
                <a className="[text-decoration:none] relative font-medium text-[inherit]">
                <AnchorLink text="Privacy" />
                </a>
                <a className="[text-decoration:none] relative text-base font-medium text-[inherit]">
                <AnchorLink text="GDPR" />
                </a>
                <a className="[text-decoration:none] relative font-medium text-[inherit]">
                  <AnchorLink text="Do not sell my personal information" />
                </a>
              </div>
            </div>
            <div className="relative text-sm font-public-sans text-center mt-10 sm:text-sm">
              ©2023 . All rights reserved.
            </div>
          </div>
        </footer>
    );
}

export default Footer;