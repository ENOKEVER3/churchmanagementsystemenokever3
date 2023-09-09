import { FunctionComponent } from "react";
import { LocalNavigator } from "../../../types/InteractionTypes";
import CheckInHeader from "./Header";

const GroupContact: FunctionComponent<LocalNavigator> = ({ activePage }) => {
  return (
    <div className="flex flex-col justify-center flex-1 mr-8 overflow-hidden">
      <CheckInHeader activePage={activePage} />
    </div>
  );
};

export default GroupContact;
