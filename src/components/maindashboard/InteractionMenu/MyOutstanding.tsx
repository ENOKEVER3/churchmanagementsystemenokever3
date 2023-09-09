import { FunctionComponent } from "react";
import { LocalNavigator } from "../../../types/InteractionTypes";
import InteractionHeader from "./Header";

const MyOutstanding: FunctionComponent<LocalNavigator> = ({ activePage }) => {

  return (
    <div className="flex flex-col justify-center flex-1 mr-8 overflow-hidden">
    <InteractionHeader activePage={activePage} />
    <div className="relative bg-whitesmoke-200 w-full flex flex-col pt-[300px] px-0 pb-0 box-border items-center justify-start text-center text-19xl text-primary-black-100 font-public-sans">
      <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] px-2.5">
        <div className="relative font-extrabold">
          Show someone your church cares
        </div>
        <div className="relative text-5xl font-medium text-dimgray-100">
          Assign interactions and connect with your church goers.
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyOutstanding;
