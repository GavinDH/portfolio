import React from "react";
import "./style.scss";

interface IProps {
    style?: object,
    image?: RequireResolve
}

const imageHover: React.FC<IProps> = (props) => {
    const { children, style, image } = props;
    return (
        <div
            style={{
                backgroundImage: `url(${image})`,
                ...style
            }}

            className="image-hover"
        >
            <div className="child">
                {children}
            </div>
            
        </div>
    );
};

export default imageHover;