import { FunctionComponent, memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateUUID } from "../globals";
import {
  AddFamilyDetail,
  AddFamilyType,
} from "../types/AddFamilyTemplateTypes";
import { CustomObject } from "../types/GenericTypes";

interface AddFamilyMainType extends AddFamilyType {
  allMembers?: AddFamilyDetail;
  onEdit?: (member: AddFamilyDetail) => void;
}

const AddFamilyMain: FunctionComponent<AddFamilyMainType> = memo(
  ({ onClose, onContinue, allMembers, onEdit }) => {
    const [isFamilyAdded, setFamilyAdded] = useState<boolean>(false);
    const navigate = useNavigate();
    const memberOrder: CustomObject<Number> = {
      owner: 1,
      spouse: 2,
      child: 3,
      visitor: 4,
    };
    const flatMembers = Object.keys(allMembers ?? [])
      .map((member) => allMembers?.[member])
      .flat()
      .sort(
        (one: AddFamilyDetail, other: AddFamilyDetail) =>
          (memberOrder[one!.extension!] as any) -
          (memberOrder[other!.extension!] as any)
      );

    useEffect(() => {
      if (isFamilyAdded) return;

      setFamilyAdded(
        flatMembers.filter((member) => member.extension === "visitor").length !=
          0
      );
    });

    return (
      <div className="relative rounded-xl bg-night-ghost-text w-[800px] no-scrollbar overflow-scroll flex flex-col py-8 px-[38px] box-border items-start justify-start gap-[48px] max-w-full max-h-full text-right text-19xl text-royalblue-100 font-public-sans">
        <div className="self-stretch flex flex-row items-center justify-between">
          <b className="relative text-6xl capitalize">Add family</b>
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
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[64px] text-primary-black-100">
          {Object.entries(flatMembers).map(([_, member]) => {
            const image = member?.avatar ?? require("assets/images/avatar.png");
            return (
              <div
                key={generateUUID()}
                className="flex flex-row items-center justify-start gap-[14px] text-base text-primary-black-100"
              >
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-81xl w-[99px] h-[99px] overflow-hidden shrink-0 bg-cover bg-no-repeat bg-[top]"
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="relative font-medium">{member?.fullname}</div>
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center"
                  onClick={() => onEdit?.(member)}
                >
                  <img
                    className="relative w-4 h-4"
                    alt=""
                    src="assets/images/edit-blue.svg"
                  />
                </button>
              </div>
            );
          })}
        </div>
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col items-center justify-start gap-[35px]">
            <div
              className={`self-stretch flex flex-row items-center justify-center gap-[10px] ${
                isFamilyAdded ? "hidden" : ""
              }`}
            >
              <button
                className="cursor-pointer p-0 bg-night-ghost-text rounded-lg box-border w-52 h-[50px] flex flex-col items-center justify-center border-[1px] border-solid border-royalblue-100"
                onClick={() => onContinue?.({ extension: "child" })}
              >
                <div className="flex flex-row items-center justify-center">
                  <div className="relative text-base font-semibold font-label-medium-600 text-gray-100 text-center">
                    Add Child
                  </div>
                </div>
              </button>
              <button
                className="cursor-pointer p-0 bg-royalblue-100 self-stretch rounded-lg box-border w-52 flex flex-col items-center justify-center border-[1px] border-solid border-royalblue-100"
                onClick={() => onContinue?.({ extension: "spouse" })}
              >
                <div className="flex flex-row items-center justify-center">
                  <div className="relative text-base font-semibold font-label-medium-600 text-night-ghost-text text-center">
                    Add Spouse
                  </div>
                </div>
              </button>
            </div>
            <button
              className={`flex flex-row items-center justify-center text-center text-gray-100 font-label-medium-600 w-[310px] h-[50px] cursor-pointer border-[1px] border-solid border-royalblue-100 rounded-lg bg-[transparent] box-border text-base ${
                !isFamilyAdded ? "hidden" : ""
              }`}
              onClick={() => {
                onContinue?.({ extension: "visitor" });
              }}
            >
              <div className="relative font-semibold">Add Visitor</div>
            </button>
            <div className="self-stretch flex-1 flex flex-row items-center justify-center">
              <button
                className="cursor-pointer [border:none] py-[18px] pr-[29px] pl-[30px] bg-royalblue-100 flex-1 rounded-lg flex flex-row items-center justify-center"
                onClick={() => {
                  if (isFamilyAdded) {
                    console.log("Details sent by AddFamilyMain", flatMembers, allMembers);
                    navigate("/family", {
                      state: {
                        members: flatMembers,
                      },
                    });
                    onClose?.({});
                    return;
                  }
                  setFamilyAdded(true);
                }}
              >
                <div className="relative text-base font-semibold font-label-medium-600 text-night-ghost-text text-center">
                  Done
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default AddFamilyMain;
