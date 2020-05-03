import React from "react";
import "./style.scss";
interface IProps {
    squere?:boolean,
    style?: object,
    url:string
}

const Avatar: React.FC<IProps> = (props) => {
    const { squere, style, url } = props;
    return (
        <img 
            src={`${url}`} 
            className={`avatar-component avatar-${squere?"squere":"round"}`}
            style={style}
        />
    );
};

export default Avatar;