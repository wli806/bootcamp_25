import React, {useEffect} from 'react'

// props
const Child = ({childAge, list, onGetMsg}) => {
    // console.log("props========", props);
    console.log('list=======', list);
    
    const handleAge = () => {
        childAge++;  // 不能改变props属性的值，是只读的
    }

    return (
        <div>
            {/* <span>我是子组件。{props.childAge}</span> */}
            <span>我是子组件。{childAge}</span>
            <button onClick={handleAge}>能够改变age？</button>
            <button onClick={()=>onGetMsg(30)}>send</button>
        </div>
    )
}


export default Child;