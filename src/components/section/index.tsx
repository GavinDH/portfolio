import React from "react";
import "./style.scss";
interface IProps {
    type?: string,
    fullScreen?:boolean,
    style?: object
}

const Section: React.FC<IProps> = (props) => {
    const { type, children , fullScreen, style} = props;
    return (
        <section
            className={`${type || "white"} ${fullScreen ? "fullScreen":""}`}
            style={style}
        >
            {children}
        </section>
    );
};

export default Section;