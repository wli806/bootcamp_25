import React from 'react'
import Son from './Son.tsx'

const Father = () => {
    const getMsgHandler = (msg: string) => {
        console.log(msg);
    }

    return (
        <Son onGetMsg={getMsgHandler} />
    )
}

export default Father