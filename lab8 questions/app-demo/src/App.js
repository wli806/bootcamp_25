import {useState, createContext, useContext} from 'react';

import logo from './logo.svg';
import './App.css';

import LocalStore from './components/LocalStore'

import Interface from './components/Interface'
import Father from './components/Father'
import SideEffect from './components/SideEffect'
import Brother1 from './components/Brother1';
import Brother2 from './components/Brother2';

// 创建 Context
const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  // 用 useState 维护主题
  const [theme, setTheme] = useState("light");

  return (
    // ThemeContext.Provider 负责提供 theme 和 setTheme 状态
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeButton = () => {
  // 通过 useContext 访问主题状态
  // useContext(ThemeContext) 让 ThemeButton 组件直接访问 theme 并切换主题
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    // setTheme(theme === "light" ? "dark" : "light") 实现主题切换
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      当前主题：{theme}（点击切换）
    </button>
  );
};

function App() {
  const [show, setShow] = useState(true);
  const [commonVal, setCommonVal] = useState('common');

  const handleChangeCommonVal = (val) => {
    setCommonVal(val);
  }

  return (
    <>
      <LocalStore />
      {/* <Interface /> */}
      {/* <Father /> */}
      {/* {show && <SideEffect onChangeShow={() => setShow(false)}/>} */}
      {/* <Brother1 commonVal={commonVal} handleChangeCommonVal={handleChangeCommonVal}/>
      <Brother2 commonVal={commonVal} handleChangeCommonVal={handleChangeCommonVal}/> */}
      
      {/* <ThemeProvider>
        <ThemeButton />
      </ThemeProvider> */}
    </>
  );
}

export default App;
