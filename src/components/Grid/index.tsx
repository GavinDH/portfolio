import React from "react";
import "./style.scss";

interface IPropsRow {
    center?: boolean,
    middle?: boolean,
    children: React.ReactNode
}

const Row: React.FC<IPropsRow> = (props) => {
    const {center, middle, children} = props;
    return (
        <div className={`row${center? " row-center":""}${middle?" row-middle":""}`}>
            {children}
        </div>
    );
};


interface IPropsCol {
    col: number,
    children: React.ReactNode
}

const Col: React.FC<IPropsCol> = (props) => {
    const { col, children} = props;
    return (
        <div className={`col col-${col}`}>
            {children}
        </div>
    );
};


interface IPropsGrid {
    col: number,
    center?: boolean,
    middle?: boolean,
    items: object[]
}

const Grid: React.FC<IPropsGrid> = (props) => {
    return (
        <Row>
            {
                props.items.map(i => <Col col={props.col}>{i}</Col>)
            }
        </Row>
    );
};

export { Row, Col };
export default Grid;