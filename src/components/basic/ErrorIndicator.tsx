import { FunctionComponent } from "react";


type ErrorIndicatorProp = {
  message: string;
  visibility?: boolean;
};

const ErrorIndicator: FunctionComponent<ErrorIndicatorProp> = ({ message, visibility }) => {
  // console.log("visibility", visibility);
  return (
    <div className={`error-indicator rounded-lg bg-crimson-200 min-w-[120px] h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center text-base px-[10px]
    ${visibility === undefined ? "hidden" : visibility ? "hidden" : ""}`}>
      <div className="flex flex-row items-center justify-between w-full">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 pr-[4px]"
          alt=""
          src="assets/images/error.svg"
        />
        <div className="relative font-medium">{message}</div>
      </div>
    </div>
  );
};

export default ErrorIndicator;
