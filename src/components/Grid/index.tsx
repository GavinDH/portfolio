import React from "react";
import "./style.scss";

interface IPropsRow {
    center?: boolean,
    middle?: boolean,
    children: React.ReactNode,
    style?:object
}

const Row: React.FC<IPropsRow> = (props) => {
    const {center, middle, children, style} = props;
    return (
        <div className={`row${center? " row-center":""}${middle?" row-middle":""}`} style={style}>
            {children}
        </div>
    );
};


interface IPropsCol {
    size: number,
    children: React.ReactNode,
    style?: object,
    addClass?:string,
    scale?:string
}

const Col: React.FC<IPropsCol> = (props) => {
    const { size, children, style, addClass, scale} = props;
    return (
        <div className={`col${scale ? " " + scale : ""} col-${size}${addClass ? " " + addClass:""}`} style={style}>
            {children}
        </div>
    );
};


interface IPropsGrid {
    size: number,
    center?: boolean,
    middle?: boolean,
    items: object[],
    style?: object
}

const Grid: React.FC<IPropsGrid> = (props) => {
    const {items, style} = props;
    return (
        <Row style={style}>
            {
                items.map(i => <Col size={props.size}>{i}</Col>)
            }
        </Row>
    );
};

export { Row, Col };
export default Grid;