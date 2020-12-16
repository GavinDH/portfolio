import React from "react";
import "./style.scss";
interface IProps {
    type?: string,
    fullScreen?:boolean,
    style?: object,
    refProp?:any,
}

const Section: React.FC<IProps> = (props) => {
    const { type, children, fullScreen, style, refProp} = props;
    return (
        <section
            className={`${type || "white"} ${fullScreen ? "fullScreen":""}`}
            style={style}
            ref={refProp}
        >
            {children}
        </section>
    );
};

export default Section;