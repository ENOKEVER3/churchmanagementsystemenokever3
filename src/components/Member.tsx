import { FunctionComponent, useState } from "react";

type MemberProps = {
  [key: string]: any;
  onEdit?: (properties: { [key: string]: any }) => void;
};

const Member: FunctionComponent<MemberProps> = ({ properties, onEdit }) => {
  const useProvidedImage = () => {
    if (!properties.avatar) return;

    const container: HTMLElement = document.getElementById("image-container")!;
    const previousImg = container.classList[container.classList.length - 1];
    if (previousImg.startsWith("bg-[url"))
      container.classList.remove(previousImg);
    container.setAttribute(
      "style",
      `background-image: url(${properties.avatar}); border: 1px solid #d7d7d7`
    );
  };

  return (
    <div className="flex flex-row items-center justify-start gap-[14px] text-base text-primary-black-100">
      <button key={properties} className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-81xl w-[99px] h-[99px] overflow-hidden shrink-0 bg-cover bg-no-repeat bg-[top] bg-[url(assets/images/avatar.png)]" />
      <div className="relative font-medium">Susan Frank</div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center"
        onClick={() => onEdit?.(properties)}
      >
        <img className="relative w-4 h-4" alt="" src="assets/images/edit-blue.svg" />
      </button>
    </div>
  );
};

export default Member;