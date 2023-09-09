import { FunctionComponent, useState, useCallback } from "react";
import MassContactNewMessagePopup from "../components/MassContactNewMessagePopup";
import PortalPopup from "../components/PortalPopup";

const MassContact: FunctionComponent = () => {
  const [isMassContactNewMessagePopupOpen, setMassContactNewMessagePopupOpen] =
    useState(false);

  const openMassContactNewMessagePopup = useCallback(() => {
    setMassContactNewMessagePopupOpen(true);
  }, []);

  const closeMassContactNewMessagePopup = useCallback(() => {
    setMassContactNewMessagePopupOpen(false);
  }, []);

  return (
    <>
      {/* <div className="relative w-full h-[1238px] flex flex-col py-0 pr-[30px] pl-0 box-border items-start justify-start text-left text-29xl text-primary-black-100 font-label-medium-600">
        <div className="self-stretch flex-1 flex flex-col py-0 pr-0 pl-[30px] items-start justify-start gap-[31px]">
          <div className="self-stretch bg-night-ghost-text box-border h-[280px] overflow-hidden shrink-0 flex flex-col py-[5px] px-7 items-start justify-center gap-[34px] border-b-[1px] border-solid border-silver">
            <div className="relative font-semibold flex items-center w-[314px] h-12 shrink-0">
              Mass contact
            </div>
            <div className="flex flex-row items-center justify-center">
              <button
                className="cursor-pointer [border:none] py-[18px] px-[15px] bg-royalblue-100 rounded-lg w-[168px] flex flex-row box-border items-center justify-center gap-[8px]"
                onClick={openMassContactNewMessagePopup}
              >
                <div className="flex flex-row items-center justify-center">
                  <img
                    className="relative w-4 h-4"
                    alt=""
                    src="assets/images/remixiconsfilldesignedit2fill1.svg"
                  />
                </div>
                <div className="relative text-base font-semibold font-label-medium-600 text-night-ghost-text text-center">
                  New Message
                </div>
              </button>
            </div>
          </div>
          <div className="self-stretch flex flex-col py-0 pr-[71px] pl-0 items-start justify-start gap-[10px] text-base text-dimgray-300 font-public-sans">
            <div className="self-stretch rounded-lg bg-night-ghost-text flex flex-row py-[15px] px-4 items-center justify-between">
              <div className="flex flex-row items-start justify-start gap-[33px]">
                <div className="rounded-lg bg-gainsboro-100 w-40 flex flex-row py-[17px] px-4 box-border items-center justify-between">
                  <div className="relative font-medium">
                    Start date
                  </div>
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="assets/images/remixiconsfillbusinesscalendarcheckfill1.svg"
                  />
                </div>
                <div className="rounded-lg bg-gainsboro-100 w-40 flex flex-row py-[17px] px-4 box-border items-center justify-between">
                  <div className="relative font-medium">
                    End date
                  </div>
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="assets/images/remixiconsfillbusinesscalendarcheckfill1.svg"
                  />
                </div>
              </div>
              <div className="rounded-lg bg-gainsboro-100 w-[190px] flex flex-row py-[17px] px-4 box-border items-center justify-between">
                <div className="relative font-medium">
                  Sender name
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="assets/images/remixiconslinesystemsearchline1.svg"
                />
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-night-ghost-text h-[315px] flex flex-col py-[73px] px-0 box-border items-center justify-center gap-[21px] text-center text-5xl text-primary-black-100">
            <button  className=" [border:none] p-0 bg-[transparent] relative w-[131px] h-[131px]">
                <img
                  className="absolute top-[0px] left-[0px] w-[131px] h-[131px]"
                  alt=""
                  src="assets/images/message.svg"
                />
              </button>
              <div className="relative font-semibold">
                No message yet, create new message
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {isMassContactNewMessagePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMassContactNewMessagePopup}
        >
          <MassContactNewMessagePopup
            onClose={closeMassContactNewMessagePopup}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default MassContact;
