import {useState, useEffect} from 'react'

import getData from '../utils/request'

const Interface = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        const handleData =  async () => {
            let result = await getData('https://server.gradspace.org/api/products');
            console.log("interface=======data========", result);
        }
        handleData();
    }, []);

    return (
        <div>
            <span>Interface</span>
            <div>
                <span>{count}</span>
                <button onClick={()=>setCount(count+1)}>改变count的值</button>
            </div>
        </div>
    )
}

export default Interface