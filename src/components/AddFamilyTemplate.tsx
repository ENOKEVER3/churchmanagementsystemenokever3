import { subscribe, unsubscribe } from "../event";
import {
  FunctionComponent,
  memo,
  useState,
  useEffect,
} from "react";
import {
  AddFamilyDetail,
  AddFamilyType,
} from "../types/AddFamilyTemplateTypes";
import FileUpload from "./basic/FileUpload";
import CustomInputField from "./basic/CustomInputField";
import { extrapolate, updateAvatar, validateMail, validatePhone } from "../globals";
import IconatedToggleButton from "./IconatedToggleButton";

const AddFamilyTemplate: FunctionComponent<AddFamilyType> = memo(
  ({ onClose, onCancel, onContinue, extras }) => {
    const [moreInfoNeeded, setMoreInfoNeeded] = useState(false);
    const [value, setValue] = useState<AddFamilyDetail>({});
    const [fileUploaded, setFileUploaded] = useState(false);
    subscribe("fileupload", (event) => {
      setValue({ ...value, avatar: event.detail.file });
      setFileUploaded(true);
      updateAvatar(event.detail.file, "image-container");
    });

    useEffect(() => {
      if (extras?.avatar) {
        setValue({ ...value, avatar: extras.avatar });
        setFileUploaded(true);
        updateAvatar(extras.avatar, "image-container");
      }

      return () => {
        unsubscribe("fileupload", (event) => console.log("[AddFamilyTemplate] Unsubscribed from", event.name));
      }
    }, [extras]);

    return (
      <>
        <div className="relative rounded-xl bg-night-ghost-text w-[800px] overflow-scroll no-scrollbar flex flex-col p-[38px] box-border items-start justify-start gap-[38px] max-w-full max-h-full text-right text-19xl text-royalblue-100 font-public-sans">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative text-6xl capitalize">
              <b>Add family</b>
              <span className="text-primary-black-100 font-medium font-label-medium-600">
                {extras?.extension
                  ? extras?.extension != "owner"
                    ? "-" + extras.extension
                    : ""
                  : ""}
              </span>
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-royalblue-500 rounded-981xl w-[32.73px] h-[32.73px] flex flex-row items-center justify-center"
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
                delete value?.gender;
                delete value?.birthday;
                delete value?.avatar;
              }
              // console.log(extrapolate(value, extras));
              onContinue?.({
                ...extrapolate(extras, value),
                extension: extras?.extension ?? "owner",
              });
            }}
          >
            <div className="self-stretch flex flex-col items-start justify-start gap-[38px] pr-[50px]">
              <CustomInputField
                heading="Full Name"
                type="text"
                initialValue={extras?.fullname}
                placeholder="Enter first name and last name"
                inputFormatAcceptable={(input) => {
                  if (!/^[a-z-]+\s[a-z-]+$/i.test(input)) return false;
                  setValue({ ...value, fullname: input });
                  return true;
                }}
                errorMessage="Invalid name format"
              />
              <CustomInputField
                heading="Email"
                type="text"
                initialValue={extras?.email}
                placeholder="Enter email"
                inputFormatAcceptable={(input) => {
                  if (!validateMail(input)) return false;
                  setValue({ ...value, email: input });
                  return true;
                }}
                errorMessage="Invalid email format"
              />
              <CustomInputField
                heading="Phone Number"
                type="text"
                initialValue={extras?.phone}
                placeholder="Enter contact here"
                inputFormatAcceptable={(input) => {
                  if (!validatePhone(input)) return false;
                  setValue({ ...value, phone: input });
                  return true;
                }}
                errorMessage="Invalid phone number format"
              />
            </div>
            <IconatedToggleButton
              text="Add more info"
              toggle={moreInfoNeeded}
              onToggled={setMoreInfoNeeded}
            />
            <div
              className={`self-stretch flex flex-col py-0 pr-[50px] pl-0 items-start justify-start gap-[38px] ${
                !moreInfoNeeded ? "hidden" : ""
              }`}
            >
              <div className="flex flex-col p-2.5 items-start justify-start">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="flex flex-col items-start justify-start">
                    <b className="relative">Gender</b>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[38px]">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <input
                        className="cursor-pointer relative w-6 h-6 overflow-hidden shrink-0"
                        type="radio"
                        defaultChecked={extras?.gender === "m"}
                        name="gender"
                        onChange={() => setValue({ ...value, gender: "m" })}
                      />
                      <b className="relative">Male</b>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <input
                        className="cursor-pointer relative w-6 h-6 overflow-hidden shrink-0"
                        type="radio"
                        defaultChecked={extras?.gender === "f"}
                        name="gender"
                        onChange={() => setValue({ ...value, gender: "f" })}
                      />
                      <b className="relative">Female</b>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`flex gap-[16px] items-center ${
                  !fileUploaded ? "hidden" : ""
                }`}
              >
                <button
                  id="image-container"
                  className={`cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-81xl w-[99px] h-[99px] overflow-hidden shrink-0  bg-cover bg-no-repeat bg-[top] bg-[url(assets/images/avatar.png)]`}
                  onClick={(e) => e.preventDefault()}
                />
                <button
                  className={`cursor-pointer [border:none] p-0 bg-[transparent] relative w-4 h-4 shrink-0 bg-[url(assets/images/edit-blue.svg)] bg-cover bg-no-repeat bg-[top]`}
                  onClick={(e) => {
                    e.preventDefault();
                    setFileUploaded(false);
                  }}
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <b className="relative">Birthday</b>
                <input
                  className="font-medium font-public-sans text-base bg-gainsboro-100 self-stretch rounded-lg h-[58px] overflow-hidden shrink-0 flex flex-row py-0 pr-[15px] pl-5 box-border items-center justify-start focus:border-[2px] focus:border-solid focus:border-royalblue-100"
                  type="date"
                  value={extras?.birthday}
                  placeholder="dd/mm/year"
                  onChange={(e) => {
                    e.preventDefault();
                    setValue({ ...value, birthday: e.target.value });
                  }}
                />
              </div>
              <FileUpload visibility={!fileUploaded} />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[33px]">
              <button
                className="cursor-pointer py-[18px] pr-[29px] pl-[30px] bg-text-night-ghost-text flex-1 rounded-lg flex flex-row items-center justify-center"
                onClick={onCancel}
              >
                <div className="relative text-base font-semibold font-label-medium-600 text-gray-100 text-center">
                  Cancel
                </div>
              </button>
              <input
                type="submit"
                className="cursor-pointer [border:none] py-[18px] pr-[29px] pl-[30px] bg-gainsboro-100 flex-1 flex rounded-lg text-base font-semibold font-label-medium-600 text-gray-100 text-center justify-center"
                value="Continue"
              ></input>
            </div>
          </form>
        </div>
      </>
    );
  }
);

export default AddFamilyTemplate;
