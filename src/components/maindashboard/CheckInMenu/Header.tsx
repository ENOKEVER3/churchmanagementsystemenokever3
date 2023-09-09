import { FunctionComponent } from "react";
import { publish } from "../../../event";
import { LocalNavigator } from "../../../types/InteractionTypes";

const EVENT_NAME = "interaction";

type CheckInProp = {
  value: string;
  activePage: string;
  id: string;
};

const CheckInControl: FunctionComponent<CheckInProp> = ({
  id,
  value,
  activePage,
}) => {
  // if (id === activePage) console.log("id ", id, "activePage", activePage);

  return (
    <div className="group">
      <button
        className={`rounded-lg w-[168px] flex flex-row py-[18px] box-border items-center justify-center text-base hover:bg-royalblue-100 focus-within:bg-royalblue-100 focus-within:text-night-ghost-text hover:text-night-ghost-text border-[1px] bg-[transparent] border-solid border-royalblue-100 ${
          id === activePage ? "bg-royalblue-100 text-night-ghost-text" : ""
        }`}
        onClick={(e) => {
          // console.log(activePage, id);
          e.preventDefault();
          publish(EVENT_NAME, { activePage: id });
        }}
      >
        <div className="relative font-semibold ">{value}</div>
      </button>
    </div>
  );
};

const CheckInHeader: FunctionComponent<LocalNavigator> = ({
  activePage,
}) => {
  return (
    <div className="self-stretch bg-night-ghost-text overflow-hidden flex flex-col py-[47px] px-7 items-start justify-start gap-[3px] text-left border-solid border-silver">
      <div className="relative font-semibold">Check-In</div>
      <div className="group flex flex-row items-center justify-center gap-[8px] text-center text-base text-gray-200">
          <CheckInControl id="checkin" value="Check-In" activePage={activePage} />
          <CheckInControl id="status" value="Status" activePage={activePage} />
          <CheckInControl id="groupcontact" value="Group contact" activePage={activePage} />
      </div>
    </div>
  );
};

export default CheckInHeader;
