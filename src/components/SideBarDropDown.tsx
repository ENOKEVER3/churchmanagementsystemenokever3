import { FunctionComponent, useCallback, useState } from "react";

type Action = {
  id: string;
  name: string;
  onClick?: (pageID: any) => void;
};

type SideBarProps = {
  activePage?: string;
  className?: string;
  icon?: string;
  dropdown?: Action;
  children?: Action[];
};

const SideBarDropDown: FunctionComponent<SideBarProps> = ({
  activePage,
  className,
  icon,
  dropdown,
  children,
}) => {
  const [hidden, setHidden] = useState(true);
  return (
    <div>
      <button
        className={
          className
            ? `${className ?? ""} ${
                activePage === dropdown?.id ? "bg-royalblue-200" : ""
              }`
            : `cursor-pointer [border:none] py-4 pr-0 pl-1.5 bg-[transparent] rounded-lg w-[230px] overflow-hidden flex flex-col box-border items-center justify-center mt-[-1px] focus:bg-slateblue ${
                activePage === dropdown?.id ? "bg-royalblue-200" : ""
              }`
        }
        onClick={useCallback(
          (e: any) => {
            setHidden(!hidden);
            return dropdown?.onClick?.(e);
          },
          [hidden]
        )}
      >
        <div className="flex flex-row items-end justify-start gap-[12px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src={icon}
          />
          <div className="relative text-base font-semibold font-label-medium-600 text-night-ghost-text text-left">
            {dropdown?.name}
          </div>
          <img
            className={`relative w-6 h-6 overflow-hidden shrink-0 toggleButton ${
              hidden ? "rotate-180" : ""
            }`}
            alt=""
            src="assets/images/remixiconslinesystemarrowdownsline21.svg"
          />
        </div>
      </button>
      <div
        className={`self-stretch bg-gray-trans overflow-hidden shrink-0 flex flex-col items-start justify-between mt-[-1px]
        ${hidden ? "hidden" : ""}`}
      >
        {children?.map((child) => {
          return (
            <div key={child.name} className="self-stretch">
              <button
                className={`cursor-pointer w-full [border:none] py-0 pr-0 pl-[70px] bg-[transparent] self-stretch h-11 flex flex-row box-border items-center justify-between hover:bg-royalblue-200
                        ${activePage === child.id ? "bg-royalblue-200" : ""}`}
                onClick={child.onClick}
              >
                <div className="flex-1 relative text-base font-semibold font-label-medium-600 text-night-ghost-text text-left">
                  {child.name}
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBarDropDown;
