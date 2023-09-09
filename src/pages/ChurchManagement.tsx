import { FunctionComponent } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ChurchManagement: FunctionComponent = () => {
  return (
    <>
      <Header />
      <div className="font-rasa relative [background:linear-gradient(180deg,_#91a8ea,_#fff)] w-full flex flex-col py-[100px] px-[10px] box-border items-center justify-center text-left text-mid text-royalblue-100">
        <div className="self-stretch flex-1 flex flex-row items-center justify-center flex-wrap">
          <div className="self-stretch w-[400px] flex flex-col py-[37px] px-0 box-border items-center justify-center sm:flex-1 sm:pl-2.5 sm:pr-2.5 sm:box-border">
            <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[30px]">
              <div className="relative text-17xl">Church Management</div>
              <div className="self-stretch relative text-primary-black-100 text-5xl">
                <p className="m-0">{`Platform to Know, Grow, `}</p>
                <p className="m-0">and Engage your Community</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-[16px] text-center text-xs text-night-ghost-text">
                <div className="group">
                  <button
                    className=" rounded-lg group-hover:bg-royalblue-100 group-focus-within:bg-royalblue-100 border-[2px] border-solid border-royalblue-100 w-[168px] flex flex-row py-[18px] box-border items-start justify-start
                      cursor-pointer bg-[transparent] py-2.5 px-0 rounded-lg"
                  >
                    <div className="relative font-overlock group-hover:text-night-ghost-text text-royalblue-100 group-focus-within:text-night-ghost-text m-auto">
                      Get started
                    </div>
                  </button>
                </div>
                <div className="group">
                  <button
                    className=" rounded-lg group-hover:bg-royalblue-100 group-focus-within:bg-royalblue-100 border-[2px] border-solid border-royalblue-100 w-[168px] flex flex-row py-[18px] box-border items-start justify-start
                      cursor-pointer bg-[transparent] py-2.5 px-0 rounded-lg"
                  >
                    <div className="relative font-overlock group-hover:text-night-ghost-text text-royalblue-100 group-focus-within:text-night-ghost-text m-auto">
                      Learn more
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <img className="relative w-[436.73px]" alt="" src="assets/images/frame-482.svg" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChurchManagement;
