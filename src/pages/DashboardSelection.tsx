import { FunctionComponent } from "react";
import Header from "../components/builder/Header";

const DashboardSelection: FunctionComponent = () => {
  return (
    <div className="relative w-full h-[1219px] flex flex-col items-start justify-start text-center text-3xl text-royalblue-100 font-public-sans">
      <Header />
      <div className="self-stretch flex-1 bg-whitesmoke-200 overflow-hidden flex flex-col py-72 px-0 items-center justify-center text-5xl text-primary-black-100 md:pt-[150px] md:pb-[150px] md:box-border sm:pt-20 sm:pb-20 sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-center gap-[72px]">
          <div className="relative font-extrabold text-royalblue-100">
            Dashboard
          </div>
          <div className="relative text-29xl font-extrabold md:text-16xl">
            Hi Alice!
          </div>
          <div className="relative font-semibold text-dimgray-200">
            Choose one
          </div>
          <div className="flex flex-row items-center justify-center gap-[20px] md:flex-wrap">
            <div className="w-[300px] h-[300px] flex flex-col items-center justify-between">
              <div className="rounded-3xs bg-night-ghost-text w-[300px] h-[300px] overflow-hidden shrink-0 flex flex-col items-center justify-between">
                <div className="self-stretch flex-1 flex flex-col items-center justify-center gap-[11px]">
                  <img
                    className="relative w-[88px] h-[88px]"
                    alt=""
                    src="assets/images/remixiconsfilldevicesmartphonefill11.svg"
                  />
                  <div className="relative uppercase font-semibold">
                    <p className="m-0">{`Mobile App `}</p>
                    <p className="m-0">Builder</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xs bg-night-ghost-text shadow-[0px_19px_83px_rgba(35,_82,_213,_0.1)] box-border w-[303.5px] h-[303.5px] overflow-hidden shrink-0 flex flex-col items-center justify-between text-3xl border-[3.5px] border-solid border-royalblue-100">
              <div className="self-stretch flex-1 flex flex-col items-center justify-center gap-[12.65px]">
                <img
                  className="relative w-[89.95px] h-[89.95px]"
                  alt=""
                  src="assets/images/remixiconsfilldevicemacbookfill11.svg"
                />
                <div className="self-stretch relative uppercase font-semibold">
                  Website Builder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSelection;
