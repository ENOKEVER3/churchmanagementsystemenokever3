import { FunctionComponent, useState, useCallback } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../components/builder/Header";

const BuilderDashboard: FunctionComponent = () => {
  const navigate = useNavigate();
  // const [isCreateSitePopupOpen, setCreateSitePopupOpen] = useState(false);

  // const openCreateSitePopup = useCallback(() => {
  //   setCreateSitePopupOpen(true);
  // }, []);

  // const closeCreateSitePopup = useCallback(() => {
  //   setCreateSitePopupOpen(false);
  // }, []);

  return (
    <>
      <div className="relative w-full min-h-[100vh] flex flex-col items-start justify-start text-center text-3xl text-royalblue-100 font-public-sans">
        <Header />
        <div className="self-stretch flex-1 bg-whitesmoke-200 overflow-hidden flex flex-row py-[20px] px-0 items-center justify-center text-5xl md:box-border sm:box-border">
          <div className="flex-1 flex flex-col items-center justify-start gap-[50px]">
            <div className="relative font-extrabold">Dashboard</div>
            <div className="relative text-21xl font-extrabold text-primary-black-100">
              Hi Alice!
            </div>
            <div className="self-stretch relative text-3xl font-semibold text-dimgray-200">Create your site by Tapping</div>
            <div className="rounded-xl bg-night-ghost-text overflow-hidden flex flex-col p-8 items-center justify-center gap-[18px] text-xl text-gray-100">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[119px] h-[117px]"
                onClick={() => {
                  navigate("/designselection");
                }}
              >
                <img
                  className="absolute top-[0px] left-[0px] w-[119px] h-[117px]"
                  alt=""
                  src="assets/images/new.svg"
                />
              </button>
              <div className="relative font-semibold flex items-center justify-center">
                Tap to start creating
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {isCreateSitePopupOpen && (
        <PortalPopup onOutsideClick={closeCreateSitePopup}>
          <CreateSitePopup onClose={closeCreateSitePopup} />
        </PortalPopup>
      )} */}
    </>
  );
};

export default BuilderDashboard;
