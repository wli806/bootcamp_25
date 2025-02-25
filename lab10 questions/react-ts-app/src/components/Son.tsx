import React from 'react'

type SonProps = {
    onGetMsg?: (msg: string) => void
}

const Son = (props: SonProps) => {
    const {onGetMsg} = props;

    const handleClick = () => {
        onGetMsg?.('this is a message');
    }

    return (
        <button onClick={handleClick}>send</button>
    )
}

export default Son