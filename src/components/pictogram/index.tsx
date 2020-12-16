import React from "react";

interface IProps {
    url: string,
    click?: Function
    width?:Number
}

const Pictogram: React.FC<IProps> = (props) => {
    const {url, width, click } = props;
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
            src={`${url}`}
            width={`${width ? width : "50"}px`}
            style={{padding:10}}
            onClick={click ? () =>click() : ()=>{}}
        />
    );
};

export default Pictogram;