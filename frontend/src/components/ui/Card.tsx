import React, { MouseEventHandler, ReactNode } from 'react';
import Typography from './Typography';
import clsx from "clsx"


type CardProps = {
    className?: string;
    children: ReactNode;
}




export default function Card({ className, children }: CardProps) {
    return (
        <div className={clsx('flex shadow-md bg-white p-5 rounded-3xl h-fit', className)}>
            {children}
        </div>
    );
};
