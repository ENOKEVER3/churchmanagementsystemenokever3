import { FunctionComponent, useState } from "react";

const CustomLabel: FunctionComponent = () => {
  const [value, setValue] = useState(0);
  const decrementValue = () => setValue(value - 1 >= 0 ? value - 1 : value);
  const incrementValue = () => setValue(value + 1);
  return (
    <div className="rounded-lg bg-gainsboro-100 w-[200px] h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center text-5xl">
      <button
        className=" [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-center"
        onClick={decrementValue}
      >
        <img
          className="relative w-11 h-11 overflow-hidden shrink-0"
          alt=""
          src="assets/images/minus-black.svg"
        />
      </button>
      <div className="self-stretch flex-1 bg-darkgray-200 overflow-hidden flex flex-row items-center justify-center">
        <b className="relative">{value}</b>
      </div>
      <button
        className=" [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-center"
        onClick={incrementValue}
      >
        <img
          className="relative w-11 h-11 overflow-hidden shrink-0"
          alt=""
          src="assets/images/plus-black.svg"
        />
      </button>
    </div>
  );
};

export default CustomLabel;
