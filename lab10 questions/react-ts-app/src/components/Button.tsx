import React from 'react'

interface Props{
    className: string;
    children: React.ReactNode
}

const Button = (props: Props) => {
    const {className, children} = props;
    return (
        <button className={className}>{children}</button>
    )
}

export default Button;