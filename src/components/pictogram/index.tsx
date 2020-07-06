import React from "react";

interface IProps {
    url: string
}

const Pictogram: React.FC<IProps> = (props) => {
    const {url } = props;
    return (
        <img
            src={`${url}`}
            width="60px"
            style={{padding:15}}
        />
    );
};

export default Pictogram;