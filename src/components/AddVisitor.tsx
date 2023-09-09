import { subscribe, unsubscribe } from "../event";
import { FunctionComponent, memo, useEffect, useState } from "react";
import FileUpload from "./basic/FileUpload";
import IconatedToggleButton from "./IconatedToggleButton";
import { AddFamilyType } from "../types/AddFamilyTemplateTypes";
import CustomInputField from "./basic/CustomInputField";
import { CustomObject } from "../types/GenericTypes";
import { extrapolate, updateAvatar } from "../globals";

interface AddVisitorType extends AddFamilyType {}

const AddVisitor: FunctionComponent<AddVisitorType> = memo(
  ({ onClose, onCancel, onContinue, extras }) => {
    const [moreInfoNeeded, setMoreInfoNeeded] = useState(false);
    const [fileUploaded, setFileUploaded] = useState(false);
    const [value, setValue] = useState<CustomObject>({});

    subscribe("fileupload", (event: any) => {
      setFileUploaded(event.detail.file);
      // console.log("ImageUploaded; Current state: ", value);
      setValue({ ...value, avatar: event.detail.file });
    });

    useEffect(() => {
      if (extras?.avatar && value?.avatar !== extras.avatar) {
        setValue({ ...value, avatar: extras.avatar });
        setFileUploaded(true);
        updateAvatar(extras.avatar, "image-container");
      }

      return () => {
        unsubscribe("fileupload", (event) => console.log("[AddVisitor] Unsubscribed from", event.name));
      }
    }, [fileUploaded, value]);

    return (
      <div className="relative rounded-xl bg-night-ghost-text w-[1017px] overflow-scroll no-scrollbar flex flex-col p-[38px] box-border items-start justify-start gap-[38px] max-w-full max-h-full text-right text-sm text-primary-black-100 font-public-sans">
        <div className="self-stretch flex flex-row items-center justify-between text-19xl text-royalblue-100">
          <b className="relative text-6xl capitalize">Add Visitor</b>
          <button
            className="cursor-pointer [border:none] p-2.5 bg-royalblue-500 rounded-981xl flex flex-row items-start justify-start"
            onClick={onClose}
          >
            <img
              className="relative w-[12.73px] h-[12.73px]"
              alt=""
              src="assets/images/cancel.svg"
            />
          </button>
        </div>
        <form
          className="self-stretch flex flex-col items-start justify-start gap-[38px] text-sm text-primary-black-100"
          onSubmit={(e) => {
            e.preventDefault();
            if (!moreInfoNeeded) {
              delete value?.note;
              delete value?.avatar;
            }
            // console.log(
            //   "Requires more info: ",
            //   moreInfoNeeded,
            //   "value: ",
            //   value
            // );
            onContinue?.({
              ...extrapolate(extras, value),
              extension: "visitor",
            });
          }}
        >
          <div className="self-stretch flex flex-col pr-[50px]">
          <CustomInputField
            heading="Full Name"
            type="text"
            errorMessage="Invalid name format"
            placeholder="Enter first name and last name"
            initialValue={extras?.fullname ?? ""}
            inputFormatAcceptable={(input) => {
              if (!/^[a-z-]+\s[a-z-]+$/i.test(input)) return false;
              // console.log(input);
              setValue({ ...value, fullname: input });
              return true;
            }}
          />
          </div>
          <IconatedToggleButton
            text="Add more info"
            customizeContainer="cursor-pointer p-0 bg-royalblue-100 rounded-lg box-border w-[182px] min-h-[50px] flex flex-col items-center justify-center border-[1px] border-solid border-royalblue-100"
            toggle={moreInfoNeeded}
            onToggled={setMoreInfoNeeded}
          />
          <div
            className={`w-full h-full self-stretch flex flex-col gap-[30px] ${
              !moreInfoNeeded ? "hidden" : ""
            }`}
          >
            <div className="self-stretch flex flex-col py-0 pr-[41px] pl-0 box-border items-start justify-start gap-[8px]">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
                <b className="relative">Note</b>
                <textarea
                  className="[border:none] bg-gainsboro-100 font-medium font-public-sans text-base self-stretch flex-1 rounded-lg overflow-hidden flex flex-row pt-5 pb-0 pr-0 pl-5 items-start justify-start focus:border-[2px] focus:border-solid focus:border-royalblue-100"
                  placeholder="My sun shine"
                  onChange={(e) => setValue({ ...value, note: e.target.value })}
                  value={extras?.note}
                />
              </div>
              <div className="relative font-medium text-darkgray-100">
                These will print on their badge.
              </div>
            </div>
            <div
              className={`flex gap-[16px] items-center ${
                !fileUploaded ? "hidden" : ""
              }`}
            >
              <button
                id="image-container"
                className={`cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-81xl w-[99px] h-[99px] overflow-hidden shrink-0 bg-[url(assets/images/avatar.png)] bg-cover bg-no-repeat bg-[top] ${
                  fileUploaded ? "" : "hidden"
                }`}
              />
              <button
                className={`cursor-pointer [border:none] p-0 bg-[transparent] relative w-4 h-4 shrink-0 bg-[url(assets/images/edit-blue.svg)] bg-cover bg-no-repeat bg-[top]`}
                onClick={(e) => {
                  e.preventDefault();
                  setFileUploaded(false);
                }}
              />
            </div>
            <FileUpload visibility={!fileUploaded} />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[33px]">
            <button
              className="cursor-pointer py-[18px] pr-[29px] pl-[30px] bg-night-ghost-text flex-1 rounded-lg flex flex-row items-center justify-center border-[1px] border-solid border-royalblue-100"
              onClick={onCancel}
            >
              <div className="relative text-base font-semibold font-label-medium-600 text-gray-100 text-center">
                Back
              </div>
            </button>
            <input
              className="cursor-pointer [border:none] py-[18px] pr-[29px] pl-[30px] bg-royalblue-100 flex-1 rounded-lg text-base font-semibold font-label-medium-600 text-night-ghost-text text-center"
              type="submit"
              value="Continue"
            />
          </div>
        </form>
      </div>
    );
  }
);

export default AddVisitor;
