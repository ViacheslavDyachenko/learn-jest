import React from 'react';

type ButtonProps = {
    disabled: boolean,
    text: string,
    type: 'primary' | 'secondary',
    btnClick: (event: React.MouseEvent) => void
}

const Button = ({disabled, text, type, btnClick}: ButtonProps) => {
    return (
        <button disabled={disabled} className={type} onClick={btnClick}>{text}</button>
    )
}
export default Button;