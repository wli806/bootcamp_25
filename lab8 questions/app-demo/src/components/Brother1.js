const Brother1 = ({commonVal, handleChangeCommonVal}) => {

    const handleChangeVal = () => {
        handleChangeCommonVal('brother1');
    }

    return (
        <div>
            <span>我是brother1。commonVal={commonVal}</span>
            <button onClick={handleChangeVal}>改变值</button>
        </div>
    )
}

export default Brother1;