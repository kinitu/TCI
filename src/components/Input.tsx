import React from 'react'

interface InputProps{
    color: 'gray' | 'black' | 'white';
    size: 'small' | 'medium' | 'large';
}

const Input: React.FC<InputProps> = ({size, color}) => {
    const defaultClass = "border-solid min-h-[20px] w-[200px] border-2 px-2 py-2"
    const classes = {
        colors:{
            gray: "border-gray-500 bg-gray-200 text-blue-700",
            black: "border-blue-500 bg-gray-900 text-white",
            white: "border-cyan-200 bg-white text-black",
        },
        sizes:{
            small: "rounded-[5px] font-sm",
            medium: "rounded-[8px] font-base",
            large: "rounded-[10px] font-lg min-h-[40px]"
        }

    }
    return (
        <>
            <input type="text" className={defaultClass+" "+classes.sizes[size]+" "+classes.colors[color]}/>
        </>
    )
}

export default Input
