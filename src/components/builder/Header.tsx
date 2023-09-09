import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <div className="self-stretch bg-night-ghost-text overflow-hidden flex flex-col p-[15px] items-center justify-center">
      <div className="self-stretch flex-1 flex flex-row items-center justify-between">
        <div className="relative uppercase font-extrabold">LOGO</div>
        <div className="flex flex-row items-center justify-center gap-[16px] text-sm text-night-ghost-text [@media(max-width:500px)]:hidden">
          <div className="group">
            <button className="rounded-lg bg-transparent border-[2px] border-solid border-royalblue-100 group-hover:bg-royalblue-100 group-focus-within:bg-royalblue-100 w-[136px] h-[43px] flex flex-row items-center justify-center gap-[4px]">
              <div className="relative w-4 h-4 overflow-hidden shrink-0 group-hover:bg-[url(assets/images/home-white.svg)] group-focus-within:bg-[url(assets/images/home-white.svg)] bg-[url(assets/images/home-blue.svg)]" />
              <div className="relative font-extrabold md:text-sm md:w-[91px] group-focus-within:text-night-ghost-text group-hover:text-night-ghost-text">
                Dashboard
              </div>
            </button>
          </div>
          <div className="group">
            <button className="rounded-lg bg-transparent border-[2px] border-solid border-royalblue-100 group-hover:bg-royalblue-100 group-focus-within:bg-royalblue-100 w-[136px] h-[43px] flex flex-row items-center justify-center gap-[4px]">
              <div className="relative w-4 h-4 overflow-hidden shrink-0 group-hover:bg-[url(assets/images/tile-white.svg)] group-focus-within:bg-[url(assets/images/tile-white.svg)] bg-[url(assets/images/tile.svg)]" />
              <div className="relative font-extrabold md:text-sm md:w-[91px] group-focus-within:text-night-ghost-text group-hover:text-night-ghost-text">
                Template
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[10px]">
          <div className="relative w-[38px] h-[38px]">
            <img
              className="absolute h-[78.59%] w-[78.59%] top-[10.94%] right-[9.61%] bottom-[10.47%] left-[11.8%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="assets/images/rectangle1@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] rounded-[235.06px] w-[38px] h-[38px] object-cover"
              alt=""
              src="assets/images/frame-130@2x.png"
            />
          </div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="assets/images/remixiconslinesystemarrowdownsline2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
