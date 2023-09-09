import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/builder/Header";

const DashboardDesignSelection: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMobileAppBuilderButtonClick = useCallback(() => {
    navigate("/appbuilderdashboard");
  }, [navigate]);

  const onWebsiteBuilderButtonClick = useCallback(() => {
    navigate("/sitebuilderdashboard");
  }, [navigate]);

  return (
    <div className="relative bg-whitesmoke-200 w-full h-[100vh] flex flex-col items-start justify-start text-center text-17xl text-royalblue-100 font-public-sans">
      <Header />
      <div className="self-stretch flex-1 bg-whitesmoke-200 flex flex-col px-0 items-center justify-center gap-[30px] text-5xl">
        <div className="w-[335px] flex flex-col items-center justify-start gap-[64px]">
          <div className="relative font-extrabold">Dashboard</div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[6px] text-29xl text-primary-black-100">
            <div className="relative font-extrabold">Hi Alice!</div>
            <div className="self-stretch relative text-5xl font-semibold text-dimgray-200">{`Create by tapping `}</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap py-0 px-[30px] items-center justify-center gap-[40px]">
          <div className="group">
          <button
            className="cursor-pointer [border:none] p-0 bg-night-ghost-text rounded-xl w-[250px] h-[220px] overflow-hidden shrink-0 flex flex-col items-center justify-center group-hover:border-[3px] group-hover:border-solid group-hover:border-royalblue-100"
            onClick={onMobileAppBuilderButtonClick}
          >
            <div className="flex flex-col items-center justify-center gap-[11px]">
              <img
                className="relative w-[88px] h-[88px]"
                alt=""
                src="assets/images/remixiconsfilldevicesmartphonefill1.svg"
              />
              <div className="relative text-[20px] capitalize font-medium font-label-medium-600 text-primary-black-100">
                <p className="m-0">{`Mobile App `}</p>
                <p className="m-0">Builder</p>
              </div>
            </div>
          </button>
          </div>
          <div className="group">
          <button
            className="cursor-pointer [border:none] p-0 bg-night-ghost-text rounded-xl w-[250px] h-[220px] overflow-hidden shrink-0 flex flex-col items-center justify-center group-hover:border-[3px] group-hover:border-solid group-hover:border-royalblue-100"
            onClick={onWebsiteBuilderButtonClick}
          >
            <div className="flex flex-col items-center justify-center gap-[11px]">
              <img
                className="relative w-[89px] h-[89px]"
                alt=""
                src="assets/images/remixiconsfilldevicemacbookfill1.svg"
              />
              <div className="relative text-[20px] capitalize font-medium font-label-medium-600 text-primary-black-100">
                <p className="m-0">Website Builder</p>
              </div>
            </div>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardDesignSelection;
