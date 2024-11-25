import React, { MouseEventHandler, ReactNode } from 'react';
import Typography from './Typography';
import clsx from "clsx"

type Variants = 'small' | 'normal';

type ButtonProps = {
    className?: string;
    disabled?:boolean;
    type?: "button" | "submit" | "reset";
    isLoading?: boolean
    variant?: Variants;
    isActive?: boolean;
    onClick?: () => void | MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
}

const variantStyle: { [key in Variants]: { default: string, active?: string, inactive?: string } } = {
    small: {
        default: 'px-6 py-1 bg-accent'
    },
    normal: {
        default: 'px-8 py-2 bg-accent'
    },
};




export default function Button({ className, disabled, type="button", onClick, variant = 'normal', isLoading, isActive, children}: ButtonProps) {
    const isActiveStyle = isActive ? 'active' : 'inactive';
    return (
        <button disabled={disabled} type={type} onClick={onClick}
            className={clsx('w-fit rounded-full flex items-center justify-center',
            disabled && 'opacity-50', variantStyle[variant].default, variantStyle[variant][isActiveStyle], className)} >
            {isLoading && "Loading"}
            <Typography as='span' className={clsx('text-button flex whitespace-nowrap')}>
                {children}
            </Typography>
        </button>
    );
};
