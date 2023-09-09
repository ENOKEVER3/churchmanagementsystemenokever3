import { FunctionComponent, useState, useCallback } from "react";
import CreateBuilderProject from "../CreateBuilderProject";
import PortalPopup from "../PortalPopup";

const AppBuilderDashboard: FunctionComponent = () => {
  const [isCreateBuilderProjectPopupOpen, setCreateBuilderProjectPopupOpen] =
    useState(false);
  const [projectNameEditable, setProjectNameEditable] = useState(false);
  const [projectName, setProjectName] = useState<string>(
    "My Project"
  );

  const openCreateBuilderProjectPopup = useCallback(() => {
    setCreateBuilderProjectPopupOpen(true);
  }, []);

  const closeCreateBuilderProjectPopup = useCallback(() => {
    setCreateBuilderProjectPopupOpen(false);
  }, []);

  return (
    <>
      <div className="relative bg-whitesmoke-200 w-full overflow-hidden flex flex-col items-center justify-between text-left text-base text-dimgray-300 font-public-sans h-[100vh]">
        <div className="self-stretch bg-night-ghost-text box-border min-h-[81px] flex flex-row py-0 px-[30px] items-center justify-center border-b-[1px] border-solid border-lightgray-300 gap-[8px]">
          <div className="rounded-lg bg-gainsboro-100 w-[250px] h-[58px] flex flex-row py-0 pr-0 pl-5 box-border items-center justify-between">
            <input
              type="text"
              className="relative font-medium [text-wrap:nowrap] h-full bg-transparent"
              placeholder="Search for project"
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-[11px] text-5xl text-primary-black-100 w-full">
            <input
              className={`relative font-semibold w-[50px] h-full text-base ${
                projectNameEditable ? "" : "hidden"
              }`}
              type="text"
              defaultValue={projectName}
              contentEditable
              onKeyPress={(e) => {
                if (e.key === "Enter") setProjectNameEditable(false);
              }}
              onBlur={() => setProjectNameEditable(false)}
              onChange={(e) => setProjectName(e.target.value)}
            />
            <div
              className={`relative font-medium uppercase [@media(max-width:800px)]:max-w-[120px] [@media(min-width:800px)]:max-w-[400px] [text-wrap:nowrap] overflow-scroll no-scrollbar ${
                !projectNameEditable ? "" : "hidden"
              }`}
            >
              {projectName}
            </div>
            <button
              className="bg-[transparent] [border:none]"
              onClick={() => setProjectNameEditable(!projectNameEditable)}
            >
              <img className="relative w-6 h-6" alt="" src="assets/images/edit-gray.svg" />
            </button>
          </div>
          <div className="w-[352px] flex flex-row items-center justify-center gap-[16px] text-center text-gray-100 [@media(max-width:1024px)]:hidden">
            <button className="rounded-lg bg-night-ghost-text box-border w-[168px] flex flex-row py-[18px] pr-[29px] pl-[30px] items-center justify-center gap-[8px] border-[1px] border-solid border-royalblue-100 text-base">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="assets/images/pause.svg"
              />
              <div className="relative font-medium">Preview</div>
            </button>
            <button className="rounded-lg bg-royalblue-100 box-border w-[168px] h-[54px] overflow-hidden shrink-0 flex flex-row pt-[20px] pb-[20px] pr-[33px] pl-[32px] items-center justify-center gap-[8px] text-night-ghost-text border-[2px] border-solid border-night-ghost-text text-base">
              <img className="relative w-4 h-4" alt="" src="assets/images/world.svg" />
              <div className="relative font-medium">Publish</div>
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start text-night-ghost-text font-label-medium-600 h-full">
          <div className="self-stretch bg-royalblue-100 flex flex-col py-[203px] px-0 items-start justify-start h-full">
            <div className="flex flex-col items-start justify-start gap-[60px]">
              <div className="rounded-lg bg-gray-1600 w-[230px] overflow-hidden flex flex-col p-4 box-border items-center justify-center">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="assets/images/tile-white.svg"
                  />
                  <div className="relative font-semibold">Projects</div>
                </div>
              </div>
              <div className="rounded-lg w-[230px] overflow-hidden flex flex-col p-4 box-border items-center justify-center">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="assets/images/design.svg"
                  />
                  <div className="relative font-semibold">Design</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-[20px] pr-0 pl-[50px] box-border items-start justify-center gap-[42px] text-29xl text-gray-100 font-public-sans">
            <div className="flex flex-row p-2.5 box-border items-center justify-start">
              <div className="relative font-medium">Projects</div>
            </div>
            <div className="rounded-xl bg-night-ghost-text w-[230px] h-[200px] flex flex-col items-center justify-center gap-[28px] text-center text-5xl">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center"
                onClick={openCreateBuilderProjectPopup}
              >
                <div className="rounded bg-lightskyblue flex flex-row items-center justify-center">
                  <img
                    className="relative w-[80px] h-[80px]"
                    alt=""
                    src="assets/images/new.svg"
                  />
                </div>
              </button>
              <div className="self-stretch relative font-medium">
                New Templates
              </div>
            </div>
          </div>
        </div>
      </div>
      {isCreateBuilderProjectPopupOpen && (
        <PortalPopup>
          <CreateBuilderProject onClose={closeCreateBuilderProjectPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default AppBuilderDashboard;
