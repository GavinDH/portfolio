import React from "react";
import "./style.scss";
interface IProps {
    color?: string,
    hover?: string 
    children:any,
}

const Button: React.FC<IProps> = (props) => {
    const { color, hover, children, } = props;
    return (
        <button
            className={`${color || "primary"} ${hover||""}`}
        >
            {children}
        </button>
    );
};

export default Button;