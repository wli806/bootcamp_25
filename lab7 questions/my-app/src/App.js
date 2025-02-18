import logo from './logo.svg';
import React from 'react';
import SearchAppBar from './components/SearchAppBar';
import ProductTable from './components/ProductTable';

function App() {
  return (
    <div>
      <SearchAppBar />
      <ProductTable />
    </div>
  );
}

export default App;
