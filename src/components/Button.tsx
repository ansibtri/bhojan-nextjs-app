import React, { JSX } from "react";

interface ButtonProps{
    title: string;
    className?: string;

}
export function Button({title, className}:ButtonProps):JSX.Element{
    return <button className={className}>{title}</button>
}