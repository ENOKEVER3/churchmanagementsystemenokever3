import { FunctionComponent, useState } from 'react';

type IconatedToggleButtonProps = {
    text: string;
    toggle: boolean;
    customizeText?: string;
    customizeContainer?: string;
    expandedIcon?: string;
    collapsedIcon?: string;
    onToggled?: (currentState: boolean) => void;
};

const IconatedToggleButton: FunctionComponent<IconatedToggleButtonProps> = ({
    text,
    toggle,
    customizeText,
    customizeContainer,
    expandedIcon = 'assets/images/minus-white.svg',
    collapsedIcon = 'assets/images/plus-white.svg',
    onToggled,
}) => {
    return (
        <button
            className={
                customizeContainer ??
                `cursor-pointer p-0 bg-royalblue-100 rounded-lg box-border w-[182px] h-[50px] flex flex-col items-center justify-center border-[1px] border-solid border-royalblue-100`
            }
            onClick={(e) => {
                e.preventDefault();
                onToggled?.(!toggle);
            }}
        >
            <div className="flex flex-row items-center justify-center gap-[8px]">
                <img className="relative w-6 h-6" alt="" src={toggle ? expandedIcon : collapsedIcon} />
                <div
                    className={
                        customizeText ??
                        `relative text-base font-semibold font-label-medium-600 text-night-ghost-text text-center`
                    }
                >
                    {text}
                </div>
            </div>
        </button>
    );
};

export default IconatedToggleButton;
