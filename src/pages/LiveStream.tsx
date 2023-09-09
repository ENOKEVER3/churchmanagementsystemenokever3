import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sponsors from "../components/Sponsors";

const LiveStream: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGetStartedButtonClick = useCallback(() => {
    navigate("/loginappgivingdashboard");
  }, [navigate]);

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center justify-center text-center text-mid text-black font-heading-x-small-600">
      <Header />
      <div className="self-stretch flex-1 [background:linear-gradient(180deg,_#91a8ea,_#fff_85.92%,_rgba(255,_255,_255,_0))] flex flex-col pt-[150px] px-0 pb-0 items-center 
        justify-center gap-[50px] md:gap-[80px] md:items-center md:justify-between md:pt-[80px] md:pb-0 md:box-border">
        <div className="self-stretch flex flex-col py-0 px-[127px] items-center justify-start gap-[60px] md:flex-1 md:gap-[0px] md:pl-2.5 md:pr-2.5 md:box-border">
          <div className="self-stretch flex flex-row items-center justify-between md:flex-1">
            <div className="flex-1 h-[222px] flex flex-col items-center justify-center gap-[10px] md:gap-[20px]">
              <div className="self-stretch flex-1 flex flex-col items-center justify-center">
                <div className="relative uppercase font-extrabold flex items-center justify-center w-[351px] sm:text-base">
                  live streaming for churches
                </div>
                <div className="self-stretch relative text-21xl font-black sm:text-11xl sm:">
                  <p className="m-0">Stay connected with</p>
                  <p className="m-0">church live streaming</p>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center text-left text-base text-royalblue-100">
                <div className="flex flex-row py-0 px-px items-center justify-center gap-[10px] sm:flex-col sm:gap-[18px]">
                  <button
                    className="cursor-pointer [border:none] py-3.5 px-0 bg-royalblue-100 rounded-lg w-[150px] flex flex-row box-border items-center justify-center"
                    onClick={onGetStartedButtonClick}
                  >
                    <div className="relative text-xs uppercase font-extrabold font-heading-x-small-600 text-white text-center">
                      Get started
                    </div>
                  </button>
                  <a className="[text-decoration:none] w-[187px] h-[52px] flex flex-row items-center justify-center gap-[3px] text-[inherit] md:flex-1 md:text-[70%]">
                    <img
                      className="relative rounded-81xl w-[59px] h-[59px] overflow-hidden shrink-0"
                      alt=""
                      src="assets/images/icon8.svg"
                    />
                    <div className="flex-1 flex flex-row py-0 pr-0 pl-0.5 items-center justify-between">
                      <div className="flex-1 relative flex items-center h-[52px] hover:cursor-pointer hover:[text-decoration:underline]">
                        How it works
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img
            className="relative w-[856px] h-[455px] md:hidden md:self-stretch md:w-auto md:flex-1"
            alt=""
            src="assets/images/vector15.svg"
          />
        </div>
        <Sponsors />
      </div>
      <Footer />
    </div>
  );
};

export default LiveStream;
