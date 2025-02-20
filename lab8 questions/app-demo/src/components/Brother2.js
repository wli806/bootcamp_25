const Brother2 = ({commonVal, handleChangeCommonVal}) => {
    const handleChangeVal = () => {
        handleChangeCommonVal('brother2');
    }

    return (
        <div>
            <span>我是brother2。commonVal={commonVal}</span>
            <button onClick={handleChangeVal}>改变值</button>
        </div>
    )
}

export default Brother2;