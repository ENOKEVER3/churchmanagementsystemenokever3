import { FunctionComponent, RefObject, createRef, useCallback, useState } from "react";

type ToggleIconProps = {
    src: string;
    className?: string;
    cref?: RefObject<HTMLImageElement>;
    onClick?: (event: any) => void;
}

const ToggleIcon: FunctionComponent<ToggleIconProps> = ({ onClick, src, className, cref }) => {
    const [isToggled, setToggled] = useState(false);
    const onToggleIconClick = useCallback((event: any, onClick?: (event: any) => void) => {
        setToggled(!isToggled);
        // console.log(isToggled);
        onClick?.(event);
    }, [isToggled]);

    return (
        <img className={`relative w-6 h-6 overflow-hidden shrink-0 ${className} ${isToggled ? "animate-[1s_ease_0s_1_normal_forwards_flip-horizontal-bottom]" : ""}`} alt="" src={src}
            onClick={(e) => onToggleIconClick(e, onClick)}
            onMouseLeave={ (e) => setToggled(false)}
            ref={cref}>
        </img>
    );
}

export default ToggleIcon;