import { FunctionComponent, memo } from "react";

type MassContactNewMessagePopupType = {
  onClose?: () => void;
};

const MassContactNewMessagePopup: FunctionComponent<MassContactNewMessagePopupType> =
  memo(({ onClose }) => {
    return (
      <div className="relative flex flex-col items-start justify-start max-w-full max-h-full overflow-auto text-center text-19xl text-royalblue-100 font-public-sans">
        <div className="self-stretch flex-1 rounded-xl bg-night-ghost-text overflow-hidden flex flex-col pt-[20px] pb-[39px] px-0 items-center justify-center gap-[15px]">
          <div className="self-stretch flex flex-row py-0 pr-[27px] pl-0 items-start justify-end">
            <button
              className="cursor-pointer [border:none] p-2.5 bg-royalblue-400 rounded-81xl flex flex-row items-start justify-start"
              onClick={onClose}
            >
              <img className="relative w-6 h-6" alt="" src="assets/images/close.svg" />
            </button>
          </div>
          <div className="self-stretch flex flex-col py-0 px-[74px] items-center justify-center gap-[39px]">
            <b className="self-stretch relative">Message Type</b>
            <div className="self-stretch w-[292px] flex flex-col items-center justify-center gap-[16px] text-right text-primary-black-100">
              <button
                className="pl-[50px] self-stretch text-[17px] rounded-3xs bg-gainsboro-100 h-[60px] flex flex-row py-[4px] px-0 box-border items-center text-center
              cursor-pointer [border:none] box-border"
              >
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="relative w-11 h-11"
                    alt=""
                    src="assets/images/new-message.svg"
                  />
                  <b className="relative">Email</b>
                </div>
              </button>
              <button  className=" pl-[50px] text-[17px] self-stretch rounded-3xs bg-gainsboro-100 h-[60px] flex flex-row py-[4px] px-0 box-border items-center">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="relative w-11 h-11 overflow-hidden shrink-0"
                    alt=""
                    src="assets/images/contact.svg"
                  />
                  <b className="relative">
                    <span className="">{`Text `}</span>me
                    <span className="">ssage</span>
                  </b>
                </div>
              </button>
              <button  className=" pl-[50px] text-[17px] self-stretch rounded-3xs bg-gainsboro-100 h-[60px] flex flex-row py-[4px] px-0 box-border items-center text-center">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <img className="relative w-11 h-11" alt="" src="assets/images/voice.svg" />
                  <b className="relative">
                    <span className="">Voi</span>c
                    <span className="">e message</span>
                  </b>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

export default MassContactNewMessagePopup;
