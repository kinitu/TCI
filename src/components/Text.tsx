import React from 'react'

interface TextProps{
    family: 'sans' | 'serif' | 'mono';
    size: 'small' | 'medium' | 'large';
    title: string;
}

const Text: React.FC<TextProps> = ({family, size, title}) => {
    const classes = {
        fontFamily:{
            sans: "font-sans",
            serif: "font-serif",
            mono: "font-mono",
        } as const,
        sizes:{
            small: "text-sm",
            medium: "text-base",
            large: "text-lg",
        } as const,
    };
    return (
        <>
            <p className={classes.fontFamily[family]+" "+classes.sizes[size]}>{title}</p>
        </>
    )
}

export default Text
