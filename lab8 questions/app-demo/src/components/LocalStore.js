const LocalStore = () => {
    let list = ['Vue', 'React', 'Angular'];
    const handleSaveData = () => {
        localStorage.setItem('list', JSON.stringify(list));
    }
    
    const handleGetData = () => {
        let data = localStorage.getItem('list')
        console.log(JSON.parse(data));
    }

    return (
        <>
            <button onClick={handleSaveData}>存储数据</button>
            <button onClick={handleGetData}>获取存储的数据</button>
        </>
    )
}

export default LocalStore;