import { FunctionComponent } from "react";
import { LocalNavigator } from "../../../types/InteractionTypes";
import InteractionHeader from "./Header";

const Log: FunctionComponent<LocalNavigator> = ({ activePage }) => {
  return (
    <div className="flex flex-col justify-center flex-1 mr-8 overflow-hidden">
      <InteractionHeader activePage={activePage} />
    </div>
  );
};

export default Log;
