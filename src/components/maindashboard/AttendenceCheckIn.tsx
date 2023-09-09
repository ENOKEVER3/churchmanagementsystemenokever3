import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { subscribe } from "../../event";
import ChooseStationPopup from "../ChooseStationPopup";
import PortalPopup from "../PortalPopup";
import CheckInHeader from "./CheckInMenu/Header";

const AttendenceCheckIn: FunctionComponent = () => {
  const [isChooseStationPopupOpen, setChooseStationPopupOpen] = useState(false);
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("checkin");
  useEffect(() => {
    subscribe("interaction", (e) => setActivePage(e.detail.activePage));
  }, [activePage]);


  const openChooseStationPopup = useCallback(() => {
    setChooseStationPopupOpen(true);
  }, []);

  const closeChooseStationPopup = useCallback(() => {
    setChooseStationPopupOpen(false);
  }, []);
  const onLaunchKioskClicked = useCallback(() => {
    navigate("/choosestation");
  }, []);

  return (
    <>
      <div className="relative bg-whitesmoke-200 w-full flex flex-col items-center justify-start gap-[79px] text-center text-29xl text-primary-black-100 font-label-medium-600 pb-[22px]">
        <CheckInHeader activePage={activePage} />
        <div className="self-stretch flex flex-row py-0 pr-[141px] pl-0 items-center justify-start text-base">
          <div className="flex-1 rounded-lg bg-night-ghost-text flex flex-col py-6 px-[30px] items-start justify-center gap-[16px]">
            <div className="relative text-5xl font-semibold">
              Choose Station
            </div>
            <div className="self-stretch relative rounded-lg bg-gainsboro-100 h-16">
              <div className="absolute top-[24px] left-[24px] font-semibold">
                God’s Power
              </div>
              <img
                className="absolute top-[calc(50%_-_12px)] right-[24px] w-6 h-6 overflow-hidden"
                alt=""
                src="assets/images/arrow-right.svg"
              />
            </div>
            <div className="self-stretch relative rounded-lg bg-gainsboro-100 h-16">
              <div className="absolute top-[24px] left-[24px] font-semibold">
                Faith House
              </div>
              <img
                className="absolute top-[calc(50%_-_12px)] right-[24px] w-6 h-6 overflow-hidden"
                alt=""
                src="assets/images/arrow-right.svg"
              />
            </div>
            <div className="self-stretch relative rounded-lg bg-gainsboro-100 h-16">
              <div className="absolute top-[calc(50%_-_6px)] left-[24px] font-semibold">
                Victory Paradise
              </div>
              <img
                className="absolute top-[calc(50%_-_12px)] right-[24px] w-6 h-6 overflow-hidden"
                alt=""
                src="assets/images/arrow-right.svg"
              />
            </div>
            <button
              className="cursor-pointer [border:none] py-[18px] pr-[29px] pl-[30px] bg-royalblue-100 rounded-lg w-[404px] flex flex-row box-border items-center justify-center"
              onClick={onLaunchKioskClicked}
            >
              <div className="relative text-base font-semibold font-label-medium-600 text-night-ghost-text text-center">
                Launch your kiosk mode
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch h-[313px] flex flex-col py-0 pr-[170px] pl-0 box-border items-center justify-center text-5xl font-public-sans">
          <div className="self-stretch flex-1 rounded-lg bg-night-ghost-text flex flex-col items-center justify-center gap-[17px]">
            <div className="rounded-[65.5px] bg-royalblue-400 w-[100.01px] h-[100.01px] flex flex-col p-2.5 box-border items-center justify-center">
              <img
                className="relative w-[80.01px] h-[80.01px]"
                alt=""
                src="assets/images/edit.svg"
              />
            </div>
            <div className="relative font-semibold">
              No one has checked-in today
            </div>
          </div>
        </div>
      </div>
      {isChooseStationPopupOpen && (
        <PortalPopup onOutsideClick={closeChooseStationPopup}>
          <ChooseStationPopup onClose={closeChooseStationPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default AttendenceCheckIn;
