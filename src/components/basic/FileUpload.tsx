import { ChangeEvent, FunctionComponent, useState } from "react";
import { publish } from "../../event";

type FileUploadProps = {
  visibility: boolean;
};

const FileUpload: FunctionComponent<FileUploadProps> = ({ visibility }) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.files) return;

    const selection = URL.createObjectURL(e.target.files[0]);
    publish("fileupload", { file: selection }); 
  };

  return (
    <div
      className={`flex items-center justify-center w-full ${
        visibility ? "" : "hidden"
      }`}
    >
      <label
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-lightgray-100 border-dashed rounded-lg cursor-pointer bg-midgray-300 hover:bg-midgray-300"
        htmlFor="image-upload"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <img
            className="relative w-11 h-11 overflow-hidden shrink-0"
            alt=""
            src="assets/images/upload-blue.svg"
          />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Format should be in png or svg
          </p>
        </div>
        <input
          type="file"
          id="image-upload"
          className="hidden"
          onChange={handleFileChange}
          accept="image/svg+xml,image/png"
        />
      </label>
    </div>
  );
};

export default FileUpload;
