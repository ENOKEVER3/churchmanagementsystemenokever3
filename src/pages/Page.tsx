import { FunctionComponent, useState, useCallback } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import PortalDrawer from "../components/PortalDrawer";

const Page: FunctionComponent = () => {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const openHamburgerMenu = useCallback(() => {
    setHamburgerMenuOpen(true);
  }, []);

  const closeHamburgerMenu = useCallback(() => {
    setHamburgerMenuOpen(false);
  }, []);

  return (
    <>
      <div className="relative w-full flex flex-col items-start justify-start text-left text-base text-primary-black-100 font-open-sans">
        <header className="bg-night-ghost-text w-[989px] flex flex-row py-0 px-5 box-border items-center justify-between text-left text-17xl text-royalblue-100 font-open-sansmd:flex md:gap-[0px] md:pr-5 md:box-border">
          <div className="w-[110px] h-24 flex flex-row items-center justify-between md:flex-1 md:gap-[0px]">
            <a className="[text-decoration:none] flex-1 flex flex-row py-[39px] px-0 items-center justify-between text-[inherit] md:flex-1 md:self-stretch md:h-auto md:text-[70%]">
              <b className="flex-1 relative uppercase">LOGO</b>
            </a>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] w-[30px] h-[30px] hidden flex-row items-center justify-between md:flex"
              onClick={openHamburgerMenu}
            >
              <img className="relative w-11 h-11" alt="" src="assets/images/icon.svg" />
            </button>
          </div>
          <div className="h-4 flex flex-row py-0 pr-[31px] pl-0 box-border items-center justify-start text-mini text-primary-black-100 font-open-sansmd:w-0 md:h-0 md:flex-row md:gap-[0px] md:pr-0 md:box-border">
            <div className="w-[552px] flex flex-row py-0 px-3 box-border items-center justify-center gap-[74px] md:hidden sm:pr-0 sm:box-border">
              <div className="flex flex-row items-start justify-start hover:cursor-pointer hover:[text-decoration:underline]">
                <b className="relative capitalize hover:cursor-pointer md:">
                  Pricing
                </b>
              </div>
              <div className="w-[70px] flex flex-row items-center justify-between hover:cursor-pointer hover:[text-decoration:underline]">
                <b className="relative capitalize md:">
                  products
                </b>
                <div className="overflow-hidden flex flex-col py-1 px-0 items-center justify-center hover:animate-[1s_ease_0s_1_normal_forwards_flip-horizontal-bottom] hover:opacity-[1]">
                  <img
                    className="relative w-[8.94px] h-[5.03px]"
                    alt=""
                    src="assets/images/vector18.svg"
                  />
                </div>
              </div>
              <div className="w-20 flex flex-row items-center justify-between hover:cursor-pointer hover:[text-decoration:underline]">
                <b className="relative capitalize md:">
                  use cases
                </b>
                <div className="overflow-hidden flex flex-col py-1 px-0 items-center justify-center hover:animate-[1s_ease_0s_1_normal_forwards_flip-horizontal-bottom] hover:opacity-[1]">
                  <img
                    className="relative w-[8.94px] h-[5.03px]"
                    alt=""
                    src="assets/images/vector18.svg"
                  />
                </div>
              </div>
              <div className="w-20 flex flex-row items-center justify-between hover:cursor-pointer hover:[text-decoration:underline]">
                <b className="relative capitalize">Resources</b>
                <div className="w-[8.94px] h-3.5 overflow-hidden shrink-0 flex flex-col py-1 px-0 box-border items-center justify-between hover:animate-[1s_ease_0s_1_normal_forwards_flip-horizontal-bottom] hover:opacity-[1]">
                  <img
                    className="relative w-[8.94px] h-[5.03px]"
                    alt=""
                    src="assets/images/vector18.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row py-0.5 px-0 items-center justify-end gap-[20px] md:hidden md:w-0 md:gap-[0px] md:items-center md:justify-center">
            <button  className=" py-2.5 px-0 bg-[transparent] rounded-lg box-border w-[110px] overflow-hidden shrink-0 flex flex-row items-center justify-center border-[2px] border-solid border-royalblue-100">
              <b className="self-stretch flex-1 relative text-sm capitalize flex font-open-sanstext-royalblue-100 text-center items-center justify-center">
                Login
              </b>
            </button>
            <button  className=" [border:none] py-2.5 px-0 bg-royalblue-100 rounded-lg flex flex-row items-center justify-center">
              <b className="relative text-sm capitalize flex font-open-sanstext-night-ghost-text text-center items-center justify-center w-[122px] shrink-0">
                Book A Demo
              </b>
            </button>
          </div>
        </header>
        <div className="[background:linear-gradient(180deg,_#91a8ea,_#fff)] w-[989px] h-[574.38px] flex flex-col pt-[126px] pb-[268px] pr-[228px] pl-[148px] box-border items-start justify-start md:pt-20 md:pb-[100px] md:pr-20 md:pl-[90px] md:box-border">
          <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[11px]">
            <div className="relative uppercase font-extrabold flex items-center w-[39.01px] h-[18px] shrink-0">
              404
            </div>
            <div className="relative text-21xl font-black flex items-center w-[677.37px] h-[65px] shrink-0 md:self-stretch md:w-auto sm:text-16xl">
              Oops! Page not found.
            </div>
            <div className="self-stretch flex flex-row pt-0 pb-[0px] pr-[11px] pl-0 items-start justify-start text-3xl md:self-stretch md:w-auto">
              <div className="flex-1 relative md:flex-1">
                <p className="m-0">This page doesn’t exist or was removed!</p>
                <p className="m-0">Try going back to home.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-royalblue-100 w-[989px] h-auto flex flex-row py-[31px] px-[69px] box-border items-center justify-between text-mini text-night-ghost-text">
          <div className="self-stretch flex-1 flex flex-col items-center justify-between sm:self-stretch sm:h-auto sm:gap-[0px]">
            <div className="self-stretch flex flex-row items-start justify-between flex-wrap gap-[20px]">
              <div className="w-[248px] flex flex-col items-start justify-start gap-[24px]">
                <div className="relative box-border w-40 h-8 text-base text-gainsboro-100 font-open-sansborder-b-[1px] border-solid border-gainsboro-100">
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
                <div className="relative box-border w-40 h-8 text-gainsboro-100 font-open-sansborder-b-[1px] border-solid border-gainsboro-100">
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
                <div className="relative box-border w-[167px] h-8 text-base text-gainsboro-100 font-open-sansborder-b-[1px] border-solid border-gainsboro-100 lg:items-start lg:justify-start">
                  <div className="absolute top-[0px] left-[0.33px] uppercase">
                    <span className="font-extrabold">ABOUT</span>
                    <span className="font-extrabold font-open-sans">
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
                <div className="relative box-border w-40 h-8 text-base text-gainsboro-100 border-b-[1px] border-solid border-gainsboro-100">
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
      {isHamburgerMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeHamburgerMenu}
        >
          <HamburgerMenu onClose={closeHamburgerMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Page;