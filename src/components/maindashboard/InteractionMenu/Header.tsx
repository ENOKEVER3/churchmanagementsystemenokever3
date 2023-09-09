import { FunctionComponent, useCallback, useEffect } from "react";
import { publish } from "../../../event";
import { LocalNavigator } from "../../../types/InteractionTypes";

const EVENT_NAME = "interaction";

type InteractionProp = {
  value: string;
  activePage: string;
  id: string;
};

const InteractionControl: FunctionComponent<InteractionProp> = ({
  id,
  value,
  activePage,
}) => {
  return (
    <div className="group">
      <button
        className={`cursor-pointer p-0 bg-night-ghost-text rounded-lg box-border w-[150px] h-12 flex flex-row items-center justify-center border-[1px] border-solid border-royalblue-100 group-focus-within:bg-royalblue-100 group-hover:bg-royalblue-100
                            ${id === activePage ? "bg-royalblue-100" : ""}`}
        onClick={(e) => publish(EVENT_NAME, { activePage: id })}
      >
        <div
          className={`self-stretch flex-1 relative text-base font-medium font-label-medium-600 text-gray-200 text-center flex items-center justify-center group-focus-within:text-night-ghost-text group-hover:text-night-ghost-text
            ${id === activePage ? "text-night-ghost-text" : ""}`}
        >
          {value}
        </div>
      </button>
    </div>
  );
};

const InteractionHeader: FunctionComponent<LocalNavigator> = ({
  activePage
}) => {
  return (
    <div className="self-stretch bg-night-ghost-text h-[226px] flex flex-col py-11 px-7 box-border items-start justify-start overflow-hidden">
      <div className="self-stretch flex-1 flex flex-row p-2.5 box-border items-center justify-start overflow-scroll no-scrollbar">
        <div className="relative font-semibold">Interaction</div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[10px] px-[8px] overflow-scroll no-scrollbar">
        <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
          <InteractionControl
            id="myoutstanding"
            value="My Outstanding"
            activePage={activePage}
          />
          <InteractionControl
            id="outstanding"
            value="Outstanding"
            activePage={activePage}
          />
          <InteractionControl
            id="completed"
            value="Completed"
            activePage={activePage}
          />
          <InteractionControl
            id="assign"
            value="Assign"
            activePage={activePage}
          />
          <InteractionControl id="log" value="Log" activePage={activePage} />
        </div>
      </div>
    </div>
  );
};

export default InteractionHeader;
