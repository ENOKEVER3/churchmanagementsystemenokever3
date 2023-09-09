import { FunctionComponent, useCallback, useEffect } from "react";
import { publish } from "../../../event";
import { LocalNavigator } from "../../../types/InteractionTypes";

const EVENT_NAME = "interaction";

type GroupProp = {
  value: string;
  activePage: string;
  id: string;
};

const GroupControl: FunctionComponent<GroupProp> = ({
  id,
  value,
  activePage,
}) => {
  // if(id === activePage)
    // console.log("id ", id, "activePage", activePage);

  return (
    <div className="group">
      <button
        className={`py-[18px] group-focus-within:bg-royalblue-100 rounded-lg box-border w-[168px] flex flex-row items-center justify-center border-[1px] border-solid border-royalblue-100 group-hover:bg-royalblue-100 bg-[transparent] ${
          id === activePage ? "bg-royalblue-100" : ""
        }`}
        onClick={(e) => {
          // console.log(activePage, id);
          e.preventDefault();
          publish(EVENT_NAME, { activePage: id });
        }}
      >
        <div
          className={`relative font-extrabold font-public-sans 
          text-base
          group-focus-within:text-night-ghost-text group-hover:text-night-ghost-text text-center ${
            id === activePage ? "text-night-ghost-text" : "text-primary-black-100"
          }`}
        >
          {value}
        </div>
      </button>
    </div>
  );
};

const GroupHeader: FunctionComponent<LocalNavigator> = ({ activePage }) => {
  return (
    <div className="self-stretch flex-1 bg-night-ghost-text overflow-hidden flex flex-col py-[38px] px-7 items-start justify-start">
      <div className="self-stretch flex flex-col items-start justify-start overflow-hidden">
        <div className="w-[430px] flex flex-row p-2.5 box-border items-center justify-start">
          <div className="relative font-semibold text-21xl">Groups</div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between overflow-hidden gap-[10px]">
          <div className="flex flex-row items-center justify-start gap-[8px] overflow-scroll no-scrollbar">
            <GroupControl id="list" value="List" activePage={activePage} />
            <GroupControl id="add" value="Add" activePage={activePage} />
            <GroupControl id="finder" value="Finder" activePage={activePage} />
          </div>
          <div className="group">
            <button className=" py-[18px] group-hover:bg-royalblue-100 group-focus-within:bg-royalblue-100 rounded-lg box-border w-[168px] h-[54px] flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-royalblue-100 bg-transparent">
              <div className="relative w-6 h-6 overflow-hidden shrink-0 bg-[url(assets/images/remixiconsfillsystemfilter3fill1.svg)] group-hover:bg-[url(assets/images/filter-white.svg)] group-focus-within:bg-[url(assets/images/filter-white.svg)]" />
              <div className="relative text-base font-extrabold font-public-sans text-gray-100 text-center group-hover:text-night-ghost-text group-focus-within:text-night-ghost-text">
                Filter
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupHeader;
