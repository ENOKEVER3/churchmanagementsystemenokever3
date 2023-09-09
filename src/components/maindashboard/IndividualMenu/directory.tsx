import { FunctionComponent } from "react";
import { LocalNavigator } from "../../../types/InteractionTypes";
import GroupHeader from "../IndividualMenu/Header";
import IndividualHeader from "../IndividualMenu/Header";

const directory: FunctionComponent<LocalNavigator> = ({ activePage }) => {
  return (
    <div className="relative bg-whitesmoke-200 w-full flex flex-col pt-0 px-0 pb-20 box-border items-center justify-start gap-[121px] text-left text-5xl text-primary-black-100 font-label-medium-600 overflow-hidden">
      <IndividualHeader activePage={activePage} />
    </div>
  );
};

export default directory;
