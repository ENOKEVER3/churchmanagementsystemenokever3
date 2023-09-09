import { FunctionComponent, memo } from "react";

type FixedButtonProps = {
  text: string;
  onClick?: (event: any) => void;
};

const FixedButton: FunctionComponent<FixedButtonProps> = ({
  text,
  onClick,
}) => {
  return (
    <div className="group">
    <button className="border-[1px] border-solid border-lightgray-300 px-0 rounded-lg h-12 flex flex-row box-border items-center bg-[transparent] justify-center group-hover:bg-royalblue-100 group-focus-within:bg-royalblue-100">
      <div
        className="self-stretch flex-1 relative font-semibold font-label-medium-600 text-center flex items-center justify-center text-base font-semibold font-label-medium-600 text-gray-500 group-hover:text-night-ghost-text group-focus-within:text-night-ghost-text text-center min-w-[180px] h-full"
        onClick={onClick}
      >
        {text}
      </div>
    </button>
    </div>
  );
};

const Forms: FunctionComponent = memo(() => {
  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-[92px] overflow-hidden text-left text-29xl text-primary-black-100 font-label-medium-600">
      <div className="self-stretch bg-night-ghost-text box-border h-40 flex flex-col py-[7px] px-7 items-start justify-end">
        <div className="w-[430px] flex flex-row py-2.5 pr-2.5 pl-0 box-border items-center justify-start">
          <div className="relative font-semibold">Forms</div>
        </div>
      </div>
      <div className="self-stretch flex flex-row py-0 px-10 items-center justify-center text-right text-5xl text-gray-500 font-public-sans">
        <div className="flex-1 rounded-lg bg-night-ghost-text flex flex-row py-[60px] px-0 items-center justify-center overflow-hidden">
          <div className="flex-1 flex flex-col py-0 px-7 items-center justify-center gap-[28px] overflow-hidden">
            <div className="self-stretch flex flex-col items-center justify-start gap-[66px] overflow-hidden">
              <div className="flex flex-col items-center justify-center gap-[18px]">
                <div className="relative font-semibold">Create form</div>
                <div className="relative text-13xl font-semibold text-primary-black-100">
                  What would you like to create?
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center overflow-scroll no-scrollbar">
                <div className="self-stretch flex flex-row pt-0 px-0 pb-2.5 items-center justify-start gap-[8px] px-[10px]">
                  <FixedButton text="Giving Form" />
                  <FixedButton text="Contact Form" />
                  <FixedButton text="Event Registration" />
                  <FixedButton text="Children's Event" />
                  <FixedButton text="Subscribe Form" />
                  <FixedButton text="Prayer Request Form" />
                  <FixedButton text="Online Attendance" />
                </div>
              </div>
            </div>
            <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-lightgray-300" />
            <div className="self-stretch flex flex-col py-0 px-5 items-center justify-center text-center text-13xl text-primary-black-100 font-label-medium-600">
              <div className="self-stretch rounded-lg bg-whitesmoke-200 flex flex-col py-[53px] px-[60px] items-center justify-center gap-[33px]">
                <div className="relative font-semibold">Form Preview</div>
                <div className="self-stretch bg-night-ghost-text h-[1027px] overflow-hidden shrink-0 flex flex-col py-[62px] pr-0 pl-5 box-border items-center justify-start ml-[auto] mr-[auto] text-[25.31px] cmov-center">
                  <div className="self-stretch flex flex-col py-0 px-[41px] items-center justify-center gap-[59px]">
                    <div className="relative font-semibold">Give Now</div>
                    <div className="self-stretch flex flex-col items-center justify-center gap-[42px] text-base">
                      <div className="flex flex-col items-center justify-start gap-[41px] text-[25.31px]">
                        <div className="flex flex-row items-start justify-start gap-[8.44px]">
                          <div className="group">
                          <button className=" border-[1px] border-solid border-lightgray-300 bg-transparent h-[60px] px-0 group-focus-within:bg-royalblue-100 group-hover:bg-royalblue-100 rounded-[8.44px] w-[180px] flex flex-row box-border">
                            <div className="relative text-base font-semibold font-label-medium-600 text-gray-500 group-hover:text-night-ghost-text group-focus-within:text-night-ghost-text text-center flex items-center justify-center w-full h-full">
                              Give Now
                            </div>
                          </button>
                          </div>
                          <div className="group">
                          <button className=" border-[1px] border-solid border-lightgray-300 bg-transparent h-[60px] px-0 group-focus-within:bg-royalblue-100 group-hover:bg-royalblue-100 rounded-[8.44px] w-[180px] flex flex-row box-border">
                            <div className="relative text-base font-semibold font-label-medium-600 text-gray-500 group-hover:text-night-ghost-text group-focus-within:text-night-ghost-text text-center flex items-center justify-center w-full h-full">
                              Sign in
                            </div>
                          </button>
                          </div>
                        </div>
                        <div className="self-stretch rounded-[10.55px] bg-whitesmoke-200 h-[147.64px] flex flex-row p-2.5 box-border items-center justify-start relative">
                          <div className="absolute my-0 mx-[!important] top-[calc(50%_-_27.78px)] left-[calc(50%_-_32px)] w-[63.93px] h-[56.38px] z-[0]">
                            <div className="absolute top-[calc(50%_-_28.19px)] left-[calc(50%_-_31.96px)] font-semibold">
                              $
                            </div>
                            <input
                              className="absolute top-[calc(50%_-_20.81px)] left-[calc(50%_-_14.04px)] text-[67.49px] font-semibold bg-transparent max-w-[110px] uppercase [caret-color:transparent]"
                              type="text"
                              defaultValue={0}
                              minLength={2}
                              maxLength={3}
                              placeholder="0"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-center justify-center gap-[11px]">
                        <div className="relative font-semibold">Fund</div>
                        <div className="self-stretch rounded-lg bg-whitesmoke-200 flex flex-row py-5 px-[23px] items-center justify-between text-gray-500">
                          <div className="relative font-semibold">General</div>
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0"
                            alt=""
                            src="assets/images/remixiconslinesystemarrowdownsline2.svg"
                          />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[13px] overflow-hidden">
                        <div className="relative font-semibold">Frequency</div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[8px] overflow-scroll no-scrollbar pb-2.5 px-[10px]">
                          <FixedButton text="On time" />
                          <FixedButton text="Monthly" />
                          <FixedButton text="Weekly" />
                          <FixedButton text="Bi-weekly" />
                          <button className=" [border:none] py-0 px-[22px] bg-[transparent] [background:linear-gradient(-90deg,_#fff,_rgba(255,_255,_255,_0))] w-[69px] h-12 overflow-hidden shrink-0 flex flex-row box-border items-center justify-center">
                            <img
                              className="relative w-6 h-6"
                              alt=""
                              src="assets/images/remixiconslinesystemarrowdownsline2.svg"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-[10px] text-left text-sm text-dimgray-300">
              <div className="relative font-semibold">Name your form</div>
              <div className="self-stretch flex flex-row items-center sjustify-between gap-[8px] overflow-scroll no-scrollbar">
                <div className="flex flex-row items-center justify-center gap-[16px]">
                  <input
                    className="[border:none] font-medium font-public-sans text-base bg-gainsboro-100 rounded-lg w-[249px] h-[58px] flex flex-row py-0 pr-0 pl-2.5 box-border items-center justify-center"
                    type="text"
                    placeholder="Enter name"
                  />
                  <div className="group">
                  <button className="bg-[transparent] rounded-lg group-hover:bg-royalblue-100 group-focus-within:bg-royalblue-100 w-[168px] h-[58px] overflow-hidden shrink-0 flex flex-row px-0 box-border items-center justify-center border-[1px] border-solid">
                    <div className="[border:none] p-0 bg-[transparent] flex-1 relative text-base group-hover:text-night-ghost-text group-focus-within:text-night-ghost-text text-dimgray-300 font-medium font-label-medium-600 text-center inline-block">
                      Start building form
                    </div>
                  </button>
                  </div>
                  <div className="group">
                  <button className="bg-[transparent] rounded-lg group-hover:bg-royalblue-100 group-focus-within:bg-royalblue-100 w-[168px] h-[58px] overflow-hidden shrink-0 flex flex-row px-0 box-border items-center justify-center border-[1px] border-solid">
                    <div className="[border:none] p-0 bg-[transparent] flex-1 relative text-base group-hover:text-night-ghost-text group-focus-within:text-night-ghost-text text-dimgray-300 font-medium font-label-medium-600 text-center inline-block">
                      Start from scratch
                    </div>
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Forms;
