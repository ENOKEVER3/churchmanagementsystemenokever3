import { useCallback } from "react";
import { FunctionComponent } from "react";
import { LocalNavigator } from "../../../types/InteractionTypes";
import ToggleIcon from "../../basic/ToggleIcon";
import InteractionHeader from "./Header";

const Interaction: FunctionComponent<LocalNavigator> = ({ activePage }) => {
  return (
    <div className="self-stretch flex-1 flex flex-col pt-0 pb-[50px] pr-[30px] pl-0 items-start justify-start gap-[92px] overflow-hidden">
      <InteractionHeader activePage={activePage} />
      <div className="self-stretch flex flex-row py-0 pr-0 pl-[30px] items-start justify-start text-center text-sm text-gray-200 font-public-sans">
        <div className="self-stretch flex-1 rounded-lg bg-night-ghost-text flex flex-col py-[62px] px-11 box-border items-start justify-start relative gap-[30px] max-w-[1440px]">
          <div className="flex flex-col items-start justify-start gap-[8px] z-[0]">
            <div className="relative font-extrabold">
              <span>Action</span>
              <span className="text-crimson-100">*</span>
            </div>
            <div className="rounded-lg bg-gainsboro-100 w-[484px] h-12 overflow-hidden shrink-0 flex flex-row py-0 px-4 box-border items-center justify-start gap-[8px]">
              <input
                className="[border:none] font-public-sans text-base bg-[transparent] self-stretch flex-1 relative text-dimgray-300 text-left flex items-center [outline:none]"
                type="email"
                placeholder="Email"
              />
              <ToggleIcon
                className="relative w-6 h-6 overflow-hidden shrink-0"
                src="assets/images/remixiconslinesystemarrowdownsline3.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] z-[1]">
            <div className="relative font-extrabold">
              <span>{`Assign To `}</span>
              <span className="text-crimson-100">*</span>
            </div>
            <div className="self-stretch rounded-lg bg-gainsboro-100 h-12 overflow-hidden shrink-0 flex flex-row py-0 px-6 box-border items-start justify-start">
              <input
                className="[border:none] font-medium font-public-sans text-base bg-[transparent] self-stretch flex-1 relative text-dimgray-300 text-left flex items-center [outline:none]"
                type="text"
                placeholder="E.g Emmanuel"
              />
            </div>
          </div>
          <div className="relative text-3xs font-medium text-dimgray-300 text-left z-[2]">
            Choose a name from the suggestion list.
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] z-[3]">
            <div className="relative font-extrabold">
              <span>Individual</span>
              <span className="text-crimson-100">*</span>
            </div>
            <div className="self-stretch rounded-lg bg-gainsboro-100 h-12 overflow-hidden shrink-0 flex flex-row py-0 px-6 box-border items-start justify-start">
              <input
                className="[border:none] font-light font-public-sans text-base bg-[transparent] self-stretch flex-1 relative text-dimgray-300 text-left flex items-center [outline:none]"
                type="text"
                placeholder="E.g Emmanuel"
              />
            </div>
          </div>
          <div className="relative text-3xs font-medium text-dimgray-300 text-left z-[4]">
            Choose a name from the suggestion list.
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-[8px] z-[5]">
            <div className="relative font-extrabold">
              <span>{`Instruction `}</span>
              <span className="text-crimson-100">*</span>
            </div>
            <textarea className="[border:none] bg-gainsboro-100 self-stretch rounded-lg h-[131px] overflow-hidden shrink-0 [outline:none]" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] z-[6]">
            <div className="relative font-extrabold">
              <span>Completed By</span>
              <span className="text-crimson-100">*</span>
            </div>
            <div className="relative self-stretch rounded-lg bg-gainsboro-100 h-12 overflow-hidden shrink-0 flex flex-row py-0 box-border items-center justify-between">
              <input
                type="date"
                className="[border:none] font-light font-public-sans text-base bg-[transparent] self-stretch flex-1 relative text-dimgray-300 text-left flex items-center [outline:none] px-[8px] z-[10]"
                placeholder="17/06/23"
              />
              <div className="absolute w-full flex justify-end right-[8px]">
              <img src="assets/images/calendar.svg"/>
              </div>
            </div>
          </div>
          <div className="relative w-[143px] h-6 z-[7] text-left text-3xs text-dimgray-300">
            <div className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden">
              <input
                className="cursor-pointer absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [outline:none]"
                type="checkbox"
              />
            </div>
            <div className="absolute top-[calc(50%_-_3px)] left-[29px] font-medium">
              Notify me on completion
            </div>
          </div>
          <div className="rounded-lg bg-royalblue-200 box-border w-[168px] h-12 flex flex-row py-0 px-[30px] items-center justify-center z-[8] border-[1px] border-solid border-royalblue-100 hover:bg-midnightblue">
            <button className=" [border:none] p-0 bg-[transparent] self-stretch flex-1 relative text-base font-semibold font-label-medium-600 text-night-ghost-text text-center flex items-center justify-center">
              Save
            </button>
          </div>
          <div className="my-0 mx-[!important] absolute top-[127px] left-[43px] rounded-t-none rounded-b bg-night-ghost-text shadow-[0px_18px_21px_rgba(0,_0,_0,_0.1)] w-[486px] flex flex-col items-start justify-start gap-[2px] z-[9] text-left text-base text-primary-black-100 hidden">
            <div className="rounded-lg bg-gainsboro w-[484px] h-12 overflow-hidden shrink-0 flex flex-row py-0 px-4 box-border items-center justify-start gap-[8px]">
              <input
                className="[border:none] font-medium text-base bg-[transparent] self-stretch flex-1 relative  text-dimgray-200 text-left flex items-center [outline:none]"
                type="email"
                placeholder="Email"
              />
              <ToggleIcon
                className="relative w-6 h-6 overflow-hidden shrink-0"
                src="assets/images/remixiconslinesystemarrowdownsline3.svg"
              />
            </div>
            <div className="self-stretch bg-whitesmoke-100 h-10 flex flex-row py-0 pr-0 pl-4 box-border items-center justify-start">
              <div className="self-stretch flex-1 relative font-light flex items-center">
                General Note
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interaction;
