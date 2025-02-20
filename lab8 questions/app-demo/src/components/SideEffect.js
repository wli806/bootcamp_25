import {useState, useEffect} from 'react'

const SideEffect = ({onChangeShow}) => {
    const [count, setCount] = useState(0);
    const [list, setList] = useState(['Vue', 'React']);
    const [obj, setObj] = useState({
        name: 'jack',
        age: 20,
        hobby: ['a','b']
    });

    const handleChangeObj = () => {
        setObj({...obj, hobby: ['a', 'b', 'c']})
    }

    

    // useEffect 是 React 的一个 Hook，它用于在函数组件中执行副作用（side effects）。
    // 常见的副作用包括：

    // 数据获取（如 fetch 请求）
    // 手动操作 DOM（如 document.title）
    // 事件监听
    // 定时器和清理任务（如 setInterval）
    // 用法：
    // useEffect(() => {
    //     // 副作用的代码——组件渲染后执行的代码
    //     return () => {
    //         // 清理函数（可选）——组件卸载时执行，或者依赖项更改时执行
    //     }
    // }, [依赖项数组])    // 依赖项数组（可选），控制useEffect何时执行
    /**
     * 如果没有依赖项数组，则每次组件渲染都会执行；
     * 当依赖项是一个[]，则副作用代码只会执行一次；
     */

    useEffect(()=>{
        console.log('执行useEffect')
    }, [])

    useEffect(()=>{
        console.log('count发生了变化', count);
    }, [count, list, obj]);

    useEffect(() => {
        let timer = setInterval(() => {
            console.log('定时器执行...')
        }, 1000);
        return () => {
            console.log('组件卸载了')
            clearInterval(timer);
        }
    })

    const handleChangeArray = () => {
        setList([...list, 'Anglar']);
    }

    return (
        <div>
            <span>{count}</span>
            <button onClick={() => setCount(count+1)}>count+1</button>
            <button onClick={()=>onChangeShow()}>卸载/销毁SideEffect组件</button>
            <button onClick={handleChangeArray}>改变list数组</button>
            <button onClick={handleChangeObj}>改变obj对象数据</button>
        </div>
    )
}

export default SideEffect;