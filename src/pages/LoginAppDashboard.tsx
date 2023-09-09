import { FunctionComponent } from "react";
import Header from "../components/Header";

const LoginAppDashboard: FunctionComponent = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center text-center text-16xl text-black font-heading-x-small-600 md:block">
      <Header />
      <div className="self-stretch [background:linear-gradient(180deg,_#91a8ea,_#fff)] overflow-hidden flex flex-col py-28 px-0 items-center justify-start gap-[109px] md:pt-20 md:pb-20 md:box-border">
        <div className="w-[336px] flex flex-col py-4 px-[142px] box-border items-center justify-center gap-[15px] text-5xl">
          <div className="relative uppercase font-extrabold flex items-center justify-center w-[156px] h-[38px] shrink-0">
            LOG IN
          </div>
          <div className="relative text-16xl font-black font-open-sansflex items-center w-[253px]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">Manage your</p>
              <p className="m-0"> Platform</p>
            </span>
          </div>
          <div className="w-[302px] flex flex-row py-0 px-[3px] box-border items-center justify-center text-left text-3xl text-dimgray-100">
            <div className="relative flex items-center w-[185px] shrink-0">{`Are you a donor? `}</div>
            <button  className=" [border:none] p-0 bg-[transparent] relative text-3xl font-heading-x-small-600 text-mediumslateblue text-left flex items-center w-[114px] shrink-0 hover:[text-decoration:underline]">
              Click here
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="rounded-mid bg-white shadow-[6px_6px_25px_7px_rgba(157,_157,_157,_0.15)] w-[250px] h-[250px] overflow-hidden shrink-0 flex flex-col pt-[68px] pb-[54px] pr-[54px] pl-[54px] box-border items-center justify-center gap-[32px]">
            <div className="flex flex-row py-0 pr-[0px] pl-0 items-start justify-start">
              <div className="relative font-extrabold">
                <p className="m-0">App</p>
                <p className="m-0">dashboard</p>
              </div>
            </div>
            <div className="rounded-lg bg-royalblue-100 box-border w-[168px] h-[54px] overflow-hidden shrink-0 flex flex-row pt-[20px] pb-[20px] pr-[33px] pl-[32px] items-center justify-center text-xs text-white border-[2px] border-solid border-white">
              <div className="relative uppercase font-extrabold">
                LOGIN
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[479px] flex flex-col py-[50px] px-0 box-border items-center justify-center gap-[23px] text-gray-100">
          <div className="self-stretch flex flex-row items-center justify-center">
            <div className="flex-1 relative font-extrabold">
              Are you a donor?
            </div>
          </div>
          <div className="self-stretch flex flex-col py-0 px-6 items-center justify-center gap-[10px] text-3xl">
            <div className="self-stretch relative ">
              To submit a donation, visit your church’s app or website. Or, if
              you have a question about
            </div>
            <div className="self-stretch relative ">
              <span>{`managing your donor account, `}</span>
              <span className="font-semibold">click here</span>
              <span>.</span>
            </div>
            <div className="self-stretch relative ">
              <span>{`For all additional questions, visit our `}</span>
              <span className="font-semibold">Community Help Center</span>
              <span>.</span>
            </div>
            <div className="self-stretch relative ">
              <span>{`For technical questions and support about your admin account visit our `}</span>
              <span className="font-semibold">Knowledge Center</span>
              <span>.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-royalblue-100 h-auto flex flex-row py-[31px] px-[69px] box-border items-center justify-between text-left text-mini text-white">
        <div className="self-stretch flex-1 flex flex-col items-center justify-between sm:self-stretch sm:h-auto sm:gap-[0px]">
          <div className="self-stretch flex flex-row items-start justify-between flex-wrap gap-[20px]">
            <div className="w-[248px] flex flex-col items-start justify-start gap-[24px]">
              <div className="relative box-border w-40 h-8 text-base text-gainsboro font-open-sansborder-b-[1px] border-solid border-gainsboro">
                <div className="absolute top-[0px] left-[0px] uppercase font-extrabold">
                  HELP
                </div>
              </div>
              <a className="[text-decoration:none] relative font-semibold text-[inherit] hover:cursor-pointer">
                Support
              </a>
              <div className="relative bg-gray-400 w-[232.88px] h-[18px]">
                <a className="[text-decoration:none] absolute top-[1px] left-[0px] font-semibold text-[inherit] hover:cursor-pointer">
                  System status
                </a>
              </div>
            </div>
            <div className="w-[248px] flex flex-col items-start justify-start gap-[24px] text-base">
              <div className="relative box-border w-40 h-8 text-gainsboro font-open-sansborder-b-[1px] border-solid border-gainsboro">
                <div className="absolute top-[0px] left-[0px] uppercase font-extrabold">
                  PLATFORM
                </div>
              </div>
              <a className="[text-decoration:none] relative text-mini font-semibold text-[inherit] hover:cursor-pointer">
                Security
              </a>
              <div className="relative bg-gray-400 w-[232.89px] h-[18px]">
                <a className="[text-decoration:none] absolute top-[-1px] left-[0px] font-semibold text-[inherit] hover:cursor-pointer">
                  FAQs
                </a>
              </div>
            </div>
            <div className="w-[248px] flex flex-col items-start justify-start gap-[24px]">
              <div className="relative box-border w-[167px] h-8 text-base text-gainsboro font-open-sansborder-b-[1px] border-solid border-gainsboro lg:items-start lg:justify-start">
                <div className="absolute top-[0px] left-[0.33px] uppercase">
                  <span className="font-extrabold">ABOUT</span>
                  <span className="font-extrabold font-heading-x-small-600">
                    {" "}
                    US
                  </span>
                </div>
              </div>
              <a className="[text-decoration:none] relative font-semibold text-[inherit] hover:cursor-pointer">
                Company
              </a>
              <a className="[text-decoration:none] relative font-semibold text-[inherit] hover:cursor-pointer">
                Careers
              </a>
              <div className="relative bg-gray-400 w-[232.89px] h-[18px]">
                <a className="[text-decoration:none] absolute top-[1px] left-[0px] font-semibold text-[inherit] hover:cursor-pointer">
                  Newsroom
                </a>
              </div>
            </div>
            <div className="w-[248px] flex flex-col items-start justify-start gap-[24px] font-open-sanssm:w-[167px] sm:flex sm:flex-wrap">
              <div className="relative box-border w-40 h-8 text-base text-gainsboro border-b-[1px] border-solid border-gainsboro">
                <div className="absolute top-[0px] left-[0px] uppercase font-extrabold">
                  LEGAL
                </div>
              </div>
              <a className="[text-decoration:none] relative font-medium text-[inherit] hover:cursor-pointer">
                Terms of service
              </a>
              <a className="[text-decoration:none] relative font-medium text-[inherit] hover:cursor-pointer">
                Terms of use
              </a>
              <a className="[text-decoration:none] relative font-medium text-[inherit] hover:cursor-pointer">
                Privacy
              </a>
              <a className="[text-decoration:none] relative text-base font-medium text-[inherit] hover:cursor-pointer">
                GDPR
              </a>
              <a className="[text-decoration:none] relative font-medium text-[inherit] hover:cursor-pointer">
                Do not sell my personal information
              </a>
            </div>
          </div>
          <div className="relative text-lg font-medium font-open-sanstext-center mt-10 sm:text-sm">
            ©2023 . All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAppDashboard;
