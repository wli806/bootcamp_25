import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Table from './components/Table'
import Button from './components/Button'
import Import from './components/Import'

// function App() {

//     let list = [
//         { id: 1, content: 'Vue' },
//         { id: 2, content: 'React' },
//         { id: 3, content: 'Angular' }
//     ];
//     let flag = false;
//     let loading = false;


//     const [count, setCount] = useState(0);
//     const [count2, setCount2] = useState(1);
//     const [form, setForm] = useState({
//         name: 'jack'
//     });

//     const handleChangeCount = () => {
//         setCount(count + 1);
//         setCount2(count2 + 1);
//     }

//     const handleChangeForm = () => {
//         setForm({
//             ...form,
//             name: 'aaa'
//         })
//     }

//     const handleChangeLi = (val) => {
//         console.log('======val=======', val);
//     }
//     return (
//         // <>
//         //   <ul>
//         //   {
//         //     list.map((item, index) => {
//         //       return (
//         //         <li style={{'color': 'red', 'fontSize': '20px'}}  key={item.id} onClick={()=> handleChangeLi(item.id)}>{item.content}</li>
//         //       )
//         //     })
//         //   }
//         //   </ul>
//         //   {flag && <span>this is a span</span>}
//         //   {
//         //     loading ? <span>loading...</span> : <span>this is another span</span>
//         //   }
//         //   <Button />
//         //   <span className="count">count的值是 {count}</span>
//         //   <button onClick={handleChangeCount}>count+1</button>
//         //   <br/>
//         //   <span>count2的值 {count2}</span>
//         //   <br/>
//         //   <span>对象的数据：form.name = {form.name}</span>
//         //   <button onClick={handleChangeForm}>改变form.name值</button>
//         // </>

//         <div className="App">
//             <Header />
//             <Import />
//             <Table />
//         </div>
//     );
// }

// export default App;

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://server.gradspace.org/api/products');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const addRow = () => {
        const newRow = {
            id: data.length + 1,
            title: 'New Item',
            description: 'New Description',
            price: 0,
            product_image: ''
        };
        setData([newRow, ...data]);
    };

    return (
        <div className="App">
            <Header />
            <Import addRow={addRow} />
            <Table data={data} />
        </div>
    );
}

export default App;