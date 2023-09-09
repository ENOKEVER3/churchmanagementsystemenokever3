import { FunctionComponent, memo } from "react";

type DatePickerProp = {
  placeholder?: string;
};

const CustomDatePicker: FunctionComponent<DatePickerProp> = memo(
  ({ placeholder }) => {
    return (
      <div className="relative w-full">
        <input
          type="date"
          className={`sd-container w-full relative font-medium bg-[transparent] outline-0 z-10`}
          placeholder={placeholder ?? ""}
        />
        <div className="absolute w-full top-[0px] right-[0px] w-6 h-6 overflow-hidden shrink-0 -z-1 flex justify-end">
          <img alt="" src="assets/images/calendar.svg" />
        </div>
      </div>
    );
  }
);

export default CustomDatePicker;
