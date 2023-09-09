import { FunctionComponent, memo } from "react";

type ChooseStationPopupType = {
  onClose?: () => void;
};

const ChooseStationPopup: FunctionComponent<ChooseStationPopupType> = memo(
  ({ onClose }) => {
    return (
      <div className="relative rounded-xl bg-night-ghost-text w-[350px] overflow-hidden flex flex-col py-[39px] px-[17px] box-border items-center justify-between max-w-full max-h-full text-center text-19xl text-royalblue-100 font-public-sans">
        <div className="self-stretch h-11 flex flex-row py-0 px-[15px] box-border items-center justify-end">
          <button
            className="cursor-pointer [border:none] p-2.5 bg-royalblue-500 rounded-81xl flex flex-row items-start justify-start"
            onClick={onClose}
          >
            <img className="relative w-6 h-6" alt="" src="assets/images/cancel.svg" />
          </button>
        </div>
        <div className="self-stretch flex flex-col py-0 px-[10px] box-border items-center justify-center gap-[10px]">
          <div className="self-stretch flex flex-row items-center justify-center">
            <b className="flex-1 relative inline-block h-[27px]">
              Choose Station
            </b>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center gap-[16px] text-primary-black-100">
            <div className="self-stretch rounded-3xs bg-gainsboro-100 flex flex-row py-[20px] px-0 box-border items-center justify-between">
              <b className="flex-1 relative ">
                God’s Power
              </b>
            </div>
            <div className="self-stretch rounded-3xs bg-gainsboro-100 flex flex-row py-[20px] px-0 box-border items-center justify-between">
              <b className="flex-1 relative ">
                Faith House
              </b>
            </div>
            <div className="self-stretch rounded-3xs bg-gainsboro-100 flex flex-row py-[20px] px-0 box-border items-center justify-between">
              <b className="flex-1 relative ">
                Victory Paradise
              </b>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default ChooseStationPopup;
