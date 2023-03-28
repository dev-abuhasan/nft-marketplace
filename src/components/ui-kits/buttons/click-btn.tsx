import React from 'react';
import "./btn-style.scss";

const ClickBtn = ({ onClick = () => { }, children, type, className }: any) => {

    return (
        <button onClick={onClick} className={`btn fw-bold rounded-pill btn_click ${className ? className : ''} ${type === 'outline' ? 'border border-primary border-2 text-primary' : 'bg-primary text-light'}`}>
            {children}
        </button >
    );
};

export default ClickBtn;