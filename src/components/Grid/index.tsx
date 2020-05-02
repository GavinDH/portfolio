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
    col: number,
    children: React.ReactNode,
    style?: object
}

const Col: React.FC<IPropsCol> = (props) => {
    const { col, children, style} = props;
    return (
        <div className={`col col-${col}`} style={style}>
            {children}
        </div>
    );
};


interface IPropsGrid {
    col: number,
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
                items.map(i => <Col col={props.col}>{i}</Col>)
            }
        </Row>
    );
};

export { Row, Col };
export default Grid;