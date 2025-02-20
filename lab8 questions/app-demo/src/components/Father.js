import {useState} from 'react'

import Child from './Child';
const Father = () => {
    const [age, setAge] = useState(20);

    const getMessage = (val) => {
        console.log('父组件输出msg=', val);
        setAge(val);
    }

    return (
        <div>
            <span>我是父组件。</span>
            <Child childAge={age} list={['Vue', 'React']} onGetMsg={getMessage}/>
        </div>
    )
}

export default Father;