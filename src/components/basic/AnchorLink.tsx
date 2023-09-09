import { FunctionComponent } from "react";

type LinkTextProp = {
    text: string;
    className?: string
}

const AnchorLink: FunctionComponent<LinkTextProp> = ({ text, className }) => {

    return (
        <span className={(className ?? "") + " hover:cursor-pointer hover:[text-decoration:underline] hover:text-mediumslateblue"}>
            {text}
        </span>
    );
}

export default AnchorLink;