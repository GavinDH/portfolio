import React from "react";
import "./style.scss";
interface IProps {
    color?: string,
    hover?: string 
    children:any,
    style?: object
}

const Button: React.FC<IProps> = (props) => {
    const { color, hover, children, style} = props;
    return (
        <button
            style={style}
            className={`${color || "primary"} ${hover? " hover-" + hover : ""}`}
        >
            {children}
        </button>
    );
};

export default Button;