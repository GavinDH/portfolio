import React from "react";
import "./style.scss";
interface IProps {
    type?: string,
    fullScreen?:boolean
}

const Section: React.FC<IProps> = (props) => {
    const { type, children , fullScreen} = props;
    return (
        <section
            className={`${type || "white"} ${fullScreen ? "fullScreen":""}`}
        >
            {children}
        </section>
    );
};

export default Section;