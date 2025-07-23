import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, children, ...rest }) => {
    return (
        <button className={classNames('btn', `btn--${variant}`, className)} {...rest}>
            {children}
        </button>
    );
};

export default Button;
