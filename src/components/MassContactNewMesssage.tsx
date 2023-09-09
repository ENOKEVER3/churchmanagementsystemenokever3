import { FunctionComponent, memo } from "react";

const MassContactNewMessage: FunctionComponent = memo(() => {
  return (
    <div className="relative w-[970px] h-[1884px] flex flex-col py-0 px-[30px] box-border items-center justify-center text-left text-5xl text-primary-black-100 font-public-sans">
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10px]">
        <div className="self-stretch bg-night-ghost-text overflow-hidden flex flex-col pt-[18px] px-2.5 pb-[25px] items-start justify-start gap-[48px] text-29xl font-label-medium-600 border-b-[1px] border-solid border-silver">
          <button  className=" [border:none] py-0 px-[5px] bg-[transparent] flex flex-row items-center justify-start gap-[8px]">
            <img
              className="relative w-[7.78px] h-[12.73px]"
              alt=""
              src="assets/images/cancel.svg"
            />
            <div className="relative text-5xl font-semibold font-label-medium-600 text-primary-black-100 text-left">
              Back
            </div>
          </button>
          <div className="flex flex-col items-start justify-start gap-[2px]">
            <div className="w-[430px] flex flex-row p-2.5 box-border items-center justify-start">
              <div className="relative font-semibold">Mass contact</div>
            </div>
            <div className="rounded-lg bg-gainsboro-100 w-52 flex flex-row py-3.5 px-[27px] box-border items-center justify-between text-base text-dimgray-300 font-public-sans">
              <div className="flex-1 relative font-medium flex items-center h-6">
                14/6/2023
              </div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="assets/images/remixiconsfillbusinesscalendarcheckfill1.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-night-ghost-text flex flex-col py-[22px] px-6 items-start justify-start gap-[40px]">
          <b className="relative">Receipt</b>
          <div className="self-stretch h-[113px] flex flex-col items-start justify-start gap-[13px] text-center text-sm font-label-medium-600">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="relative font-semibold">Choose Group (s)</div>
              <input
                className="[border:none] font-semibold font-label-medium-600 text-base bg-gainsboro-100 self-stretch rounded-lg h-[58px] flex flex-row py-0 pr-0 pl-5 box-border items-center justify-start max-w-[1010px]"
                type="text"
                placeholder="Search for Group"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-[7px] text-left text-gray-200 font-public-sans">
              <input
                className="cursor-pointer relative w-6 h-6 overflow-hidden shrink-0"
                type="checkbox"
              />
              <div className="relative font-semibold">
                Include Archived Groups
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px] text-base text-gray-200">
            <b className="relative text-5xl text-primary-black-100">Include</b>
            <div className="flex flex-col items-end justify-center gap-[4px]">
              <div className="flex flex-row items-center justify-start gap-[7px]">
                <input
                  className="cursor-pointer relative w-6 h-6 overflow-hidden shrink-0"
                  type="checkbox"
                />
                <div className="relative font-medium">Group members</div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[7px] text-sm">
                <input
                  className="cursor-pointer relative w-3.5 h-3.5"
                  type="checkbox"
                />
                <div className="relative font-medium">Include inactive</div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[7px]">
              <input
                className="cursor-pointer relative w-6 h-6 overflow-hidden shrink-0"
                type="checkbox"
              />
              <div className="relative font-medium">
                Parents of Group Member
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[7px]">
              <input
                className="cursor-pointer relative w-6 h-6 overflow-hidden shrink-0"
                type="checkbox"
              />
              <div className="relative font-medium">Send to yourself</div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-night-ghost-text flex flex-row py-3.5 px-5 items-start justify-between text-base text-dimgray-300">
          <div className="flex flex-row items-start justify-start gap-[33px]">
            <div className="rounded-lg bg-gainsboro-100 w-[150px] flex flex-row py-[17px] px-4 box-border items-center justify-between">
              <div className="relative font-medium">Start date</div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="assets/images/remixiconsfillbusinesscalendarcheckfill1.svg"
              />
            </div>
            <div className="rounded-lg bg-gainsboro-100 w-[150px] flex flex-row py-[17px] px-4 box-border items-center justify-between">
              <div className="relative font-medium">End date</div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="assets/images/remixiconsfillbusinesscalendarcheckfill1.svg"
              />
            </div>
          </div>
          <div className="rounded-lg bg-gainsboro-100 w-[170px] flex flex-row py-[17px] px-4 box-border items-center justify-between">
            <div className="relative font-medium">Sender name</div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="assets/images/remixiconslinesystemsearchline1.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex-1 rounded-lg bg-night-ghost-text flex flex-col p-6 items-start justify-between">
          <div className="self-stretch flex flex-col items-start justify-start gap-[57px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
              <b className="relative">Message</b>
              <div className="flex flex-col items-start justify-start gap-[11px] text-sm text-gray-500">
                <input
                  className="[border:none] font-semibold font-label-medium-600 text-base bg-gainsboro-100 self-stretch rounded-lg h-[58px] flex flex-row py-0 pr-0 pl-5 box-border items-center justify-start"
                  type="text"
                  placeholder="Susan Rice"
                />
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <input
                    className="cursor-pointer relative w-6 h-6 overflow-hidden shrink-0"
                    type="checkbox"
                  />
                  <div className="relative">
                    <p className="m-0 font-semibold text-gray-200">
                      Send personally messages
                    </p>
                    <p className="m-0">
                      If this is unchecked, all recipients will be able to see
                      each other
                    </p>
                    <p className="m-0">
                      {" "}
                      on the email, and the message cannot be personalized by
                      using @NAME and @FULLNAME.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <input
              className="[border:none] font-semibold font-label-medium-600 text-base bg-gainsboro-100 self-stretch rounded-lg h-[58px] flex flex-row py-0 pr-0 pl-5 box-border items-center justify-start"
              type="text"
              placeholder="Subject"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[39px] max-w-[1010px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
                <b className="relative">Body</b>
                <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
                  <div className="self-stretch rounded-lg bg-gainsboro-100 h-[235px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
                    <div className="self-stretch h-[59px] overflow-hidden shrink-0 flex flex-row pt-0 pb-2.5 pr-[60px] pl-0 box-border items-start justify-start">
                      <div className="flex-1 bg-darkgray-200 h-[47px] flex flex-row py-2.5 px-0 box-border items-center justify-center">
                        <div className="flex-1 h-[27px] flex flex-row items-center justify-start">
                          <div className="flex-1 box-border h-[27px] flex flex-col items-center justify-center border-r-[1px] border-solid border-gray-800">
                            <div className="flex flex-row py-0 px-1 items-start justify-center gap-[16px]">
                              <button  className=" [border:none] p-0 bg-[transparent] w-4 h-4 overflow-hidden shrink-0 flex flex-row items-center justify-center">
                                <div className="self-stretch flex-1 relative text-mini font-medium font-public-sans text-gray-500 text-center flex items-center justify-center">
                                  B
                                </div>
                              </button>
                              <button  className=" [border:none] p-0 bg-[transparent] w-4 h-4 overflow-hidden shrink-0 flex flex-row items-center justify-center">
                                <i className="self-stretch flex-1 relative text-mid flex font-semibold font-crimson-text text-gray-500 text-center items-center justify-center">
                                  I
                                </i>
                              </button>
                            </div>
                          </div>
                          <div className="flex-1 box-border h-[27px] flex flex-row items-center justify-center border-r-[1px] border-solid border-gray-800">
                            <button  className=" [border:none] py-0 px-1 bg-[transparent] w-[67px] flex flex-row box-border items-center justify-center gap-[4px]">
                              <div className="relative text-3xs font-light font-public-sans text-dimgray-100 text-center">
                                Source
                              </div>
                              <img
                                className="relative w-4 h-4"
                                alt=""
                                src="assets/images/remixiconslinedocumentfilecodeline1.svg"
                              />
                            </button>
                          </div>
                          <div className="flex-1 box-border h-[27px] flex flex-col items-center justify-center border-r-[1px] border-solid border-gray-800">
                            <div className="flex flex-row py-0 px-1 items-start justify-start gap-[16px]">
                              <button  className=" [border:none] p-0.5 bg-[transparent] h-4 overflow-hidden flex flex-col box-border items-center justify-center">
                                <img
                                  className="relative w-3 h-[11.27px]"
                                  alt=""
                                  src="assets/images/vector1.svg"
                                />
                              </button>
                              <button  className=" [border:none] p-0.5 bg-[transparent] overflow-hidden flex flex-row items-center justify-center">
                                <img
                                  className="relative w-3 h-3"
                                  alt=""
                                  src="assets/images/vector3.svg"
                                />
                              </button>
                              <button  className=" [border:none] p-0.5 bg-[transparent] overflow-hidden flex flex-col items-start justify-start">
                                <img
                                  className="relative w-3 h-[11.33px]"
                                  alt=""
                                  src="assets/images/vector4.svg"
                                />
                              </button>
                            </div>
                          </div>
                          <div className="flex-1 box-border h-[27px] flex flex-col items-center justify-center border-r-[1px] border-solid border-gray-800">
                            <button  className=" [border:none] py-0 px-1 bg-[transparent] w-12 flex flex-row box-border items-center justify-center gap-[2px]">
                              <div className="relative text-3xs font-light font-public-sans text-dimgray-100 text-center">
                                Font
                              </div>
                              <div className="w-4 h-4 flex flex-col pt-1 px-0 pb-0 box-border items-center justify-center">
                                <img
                                  className="relative w-[8.49px] h-[5.19px]"
                                  alt=""
                                  src="assets/images/vector5.svg"
                                />
                              </div>
                            </button>
                          </div>
                          <div className="flex-1 box-border h-[27px] flex flex-col items-center justify-center border-r-[1px] border-solid border-gray-800">
                            <div className="flex flex-row py-0 px-1 items-start justify-start gap-[8px]">
                              <button  className=" [border:none] p-0 bg-[transparent] w-4 h-4 flex flex-col items-center justify-center">
                                <img
                                  className="relative w-[11.77px] h-[11.77px]"
                                  alt=""
                                  src="assets/images/vector6.svg"
                                />
                              </button>
                              <button  className=" [border:none] p-0 bg-[transparent] w-4 h-4 flex flex-row items-center justify-center">
                                <img
                                  className="relative w-[13.63px] h-[13.63px]"
                                  alt=""
                                  src="assets/images/vector7.svg"
                                />
                              </button>
                            </div>
                          </div>
                          <div className="flex-1 box-border h-[27px] flex flex-col items-center justify-center border-r-[1px] border-solid border-gray-800">
                            <button  className=" [border:none] py-0 px-1 bg-[transparent] h-4 flex flex-row box-border items-center justify-center gap-[4px]">
                              <div className="relative text-3xs font-light font-public-sans text-dimgray-100 text-center">
                                Size
                              </div>
                              <div className="flex flex-row pt-1 px-0 pb-0 items-center justify-center">
                                <img
                                  className="relative w-[7.49px] h-[5.19px]"
                                  alt=""
                                  src="assets/images/vector8.svg"
                                />
                              </div>
                            </button>
                          </div>
                          <div className="flex-1 h-[27px] flex flex-row items-center justify-center">
                            <button  className=" [border:none] p-0 bg-[transparent] w-4 h-4 overflow-hidden shrink-0 flex flex-row items-center justify-center">
                              <img
                                className="relative w-[11.33px] h-3"
                                alt=""
                                src="assets/images/vector9.svg"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[52px] flex flex-row py-0 pr-0 pl-[18px] box-border items-center justify-start">
                    <button  className=" [border:none] py-[18px] pr-[29px] pl-[30px] bg-royalblue-100 rounded-lg w-[168px] h-[52px] flex flex-row box-border items-center justify-center gap-[8px]">
                      <img
                        className="relative w-4 h-4"
                        alt=""
                        src="assets/images/remixiconslineeditorattachment21.svg"
                      />
                      <div className="relative text-base font-semibold font-label-medium-600 text-night-ghost-text text-center">
                        Add file
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[1px] text-center text-sm font-label-medium-600">
                <div className="flex flex-row items-center justify-center gap-[2px]">
                  <input
                    className="cursor-pointer relative w-6 h-6 overflow-hidden shrink-0"
                    type="checkbox"
                  />
                  <div className="relative font-semibold">
                    Schedule Sending For Later
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[5px]">
                  <input
                    className="cursor-pointer relative w-6 h-6 overflow-hidden shrink-0"
                    type="checkbox"
                  />
                  <div className="relative font-semibold">
                    Log Contact As Interaction
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[50px] flex flex-row items-center justify-between">
            <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
              <div className="self-stretch w-[140px] flex flex-row items-center justify-center">
                <button  className=" [border:none] py-[18px] px-0 bg-royalblue-100 self-stretch flex-1 rounded-lg flex flex-row items-center justify-center gap-[8px]">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="assets/images/remixiconsfillbusinesssendplane2fill1.svg"
                  />
                  <div className="relative text-base font-semibold font-label-medium-600 text-night-ghost-text text-center">
                    Send
                  </div>
                </button>
              </div>
              <button  className=" py-[18px] px-0 bg-night-ghost-text self-stretch rounded-lg box-border w-[140px] flex flex-row items-center justify-center border-[2px] border-solid border-royalblue-100">
                <div className="flex-1 relative text-base font-semibold font-label-medium-600 text-royalblue-100 text-center">
                  Save as draft
                </div>
              </button>
            </div>
            <button  className=" p-0 bg-night-ghost-text self-stretch rounded-lg box-border w-[140px] flex flex-row items-center justify-center border-[2px] border-solid border-crimson-100">
              <div className="self-stretch flex-1 relative text-base font-semibold font-label-medium-600 text-crimson-100 text-center flex items-center justify-center">
                Cancel
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MassContactNewMessage;
