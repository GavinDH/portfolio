import React from "react";
import "./style.scss";

interface IPropsType {
    children: React.ReactNode,
    style?: object
}

const TableComponent: React.FC<IPropsType> = (props) => {
    const { children, style } = props;
    return (
        <div className="table-view" style={style}>
            {children}
        </div>
    );
};

const TableRow: React.FC<IPropsType> = (props) => {
    const { children, style } = props;
    return (
        <div className="table-view-row" style={style}>
            {children}
        </div>
    );
};

const TableType: React.FC<IPropsType> = (props) => {
    const {children, style } = props;
    return (
        <div style={style} className="table-view-type">
            {children}
        </div>
    );
};

const TableContent: React.FC<IPropsType> = (props) => {
    const { children, style } = props;
    return (
        <div style={style} className="table-view-name">
            {children}
        </div>
    );
};


export { TableRow, TableType, TableContent, TableComponent};