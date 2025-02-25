import {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import TableComponent from './components/Table'
import HeadBar from './components/HeadBar'
import ToolBar from './components/ToolBar';

import {setProducts} from './store/reducers/productsSlice'


function Products() {
  // const [tableAllData, setTableAllData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [isAddRow, setIsAddRow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('https://server.gradspace.org/api/products');
      const data = await response.json();
      dispatch(setProducts(data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getSearchValue = (val) => {
    setSearchInput(val);
  }

  return (
    <div>
      <HeadBar getSearchValue={getSearchValue} />
      <ToolBar setIsAddRow={setIsAddRow} fetchData={fetchData}/>
      <TableComponent searchInput={searchInput} isAddRow={isAddRow} setIsAddRow={setIsAddRow} fetchData={fetchData}/>
    </div>
  );
}

export default Products;
