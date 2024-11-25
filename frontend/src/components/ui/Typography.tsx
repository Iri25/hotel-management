import React, { ReactNode } from 'react';
import clsx from 'clsx';

type Variants = 'body' | 'body-bold' | 'body-small' | 'title-big' | 'title-medium' | 'title' | 'button' | 'button-small';
type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p' | 'div' | 'caption';

interface TypographyProps {
    as?: Tag;
    variant?: Variants;
    className?: string | false;
    children: ReactNode;
}

const variantStyle: { [key in Variants]: string } = {
    body: 'font-karla text-base',
    'body-bold': 'font-karla font-medium text-base',
    'body-small': 'font-karla text-sm',
    title: 'font-DMSans text-xl',
    'title-medium': 'font-DMSans text-3xl',
    'title-big': 'font-DMSans text-5xl',
    button: 'font-karla text-base',
    'button-small': 'font-karla text-sm',
};

export default function Typography({
    as = 'span',
    variant = 'body',
    children,
    className,
    ...rest
}: TypographyProps) {
    const Component = as;
    return (
        <Component {...rest} className={clsx(variantStyle[variant], 'text-black dark:text-white gap-x-2 items-center', className)}>
            {children}
        </Component>
    );
}
