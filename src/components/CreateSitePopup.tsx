import { FunctionComponent, memo } from "react";
import { Navigate, useNavigate } from "react-router-dom";

type CreateSitePopupType = {
  onClose?: () => void;
};

const CreateSitePopup: FunctionComponent<CreateSitePopupType> = memo(
  ({ onClose }) => {
    const navigate = useNavigate();

    return (
      <div className="relative rounded-xl bg-night-ghost-text w-[570px] h-[314px] overflow-hidden flex flex-col py-[23px] px-[37px] box-border items-start justify-between max-w-full max-h-full text-left text-sm text-primary-black-100 font-public-sans">
        <div className="self-stretch h-[259px] flex flex-col items-start justify-between">
          <div className="relative text-3xl uppercase font-extrabold font-label-medium-600">
            Site name
          </div>
          <div className="self-stretch bg-gray-700 overflow-hidden" />
          <div className="relative uppercase font-semibold">site Name</div>
          <input
            className="relative font-medium flex items-center rounded-lg bg-gainsboro-100 h-[50px] flex-row py-0 pr-0 pl-[18px] box-border items-center justify-between text-base text-dimgray-300 w-full"
            type="text"
            placeholder="Enter name here"
          />
          <div className="self-stretch flex flex-row items-center justify-center gap-[16px] text-center text-night-ghost-text">
            <button
              className="cursor-pointer pt-[20px] pb-[20px] pr-[33px] pl-[32px] bg-[transparent] flex-1 rounded-lg box-border h-[54px] flex flex-row items-center justify-center border-[2px] border-solid border-royalblue-100"
              onClick={onClose}
            >
              <div className="relative text-base font-label-medium-600 font-semibold text-royalblue-100 text-center">
                Cancel
              </div>
            </button>
            <button
              className="cursor-pointer flex-1 rounded-lg bg-royalblue-100 overflow-hidden flex flex-row py-[18px] px-[30px] items-center justify-center"
              onClick={() => {
                // navigate("/designselection");
              }}
            >
              <div className="relative text-night-ghost-text text-base font-label-medium-600 font-semibold">
                Continue
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default CreateSitePopup;
