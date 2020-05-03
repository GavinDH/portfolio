import React from "react";
import "./style.scss";
interface IProps {
    color?: string,
    hover?: string 
    children:any,
    style?: object,
    onClick?:any
}

const Button: React.FC<IProps> = (props) => {
    const { color, hover, children, style, onClick} = props;
    return (
        <button
            style={style}
            className={`${color || "primary"} ${hover? " hover-" + hover : ""}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;