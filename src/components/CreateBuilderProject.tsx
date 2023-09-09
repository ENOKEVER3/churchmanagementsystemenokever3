import { FunctionComponent, memo } from "react";
import CustomInputField from "./basic/CustomInputField";

type CreateBuilderProjectType = {
  onClose?: () => void;
};

const CreateBuilderProject: FunctionComponent<CreateBuilderProjectType> = memo(
  ({ onClose }) => {
    return (
      <div className="relative rounded-xl bg-night-ghost-text w-[698px] overflow-hidden flex flex-col py-11 px-[37px] box-border items-center justify-start gap-[30px] max-w-full max-h-full text-left text-5xl text-primary-black-100 font-label-medium-600">
        <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
          <div className="relative capitalize font-extrabold">
            Create a new project
          </div>
          <div className="self-stretch relative bg-gray-700 h-px overflow-hidden shrink-0" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-sm font-public-sans">
          <CustomInputField heading="Project Name" placeholder="Enter name here" inputFormatAcceptable={(input) => input.length !== 0} errorMessage="Project name cannot be empty" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-sm font-public-sans">
          <CustomInputField heading="Project Title" placeholder="Enter title to be displayed" inputFormatAcceptable={(input) => input.length !== 0} errorMessage="Project title cannot be empty" />
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[16px]">
          <button  className=" p-0 bg-[transparent] flex-1 rounded-lg box-border h-[54px] flex flex-row items-center justify-center border-[2px] border-solid border-royalblue-100"
          onClick={onClose}>
            <div className="relative text-base font-extrabold font-public-sans text-royalblue-100 text-center">
              Cancel
            </div>
          </button>
          <button  className=" [border:none] p-0 bg-royalblue-100 flex-1 rounded-lg h-[55px] flex flex-row items-center justify-center">
            <div className="relative text-base font-extrabold font-public-sans text-night-ghost-text text-center">
              Continue
            </div>
          </button>
        </div>
      </div>
    );
  }
);

export default CreateBuilderProject;
