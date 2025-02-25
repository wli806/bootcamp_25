import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button.tsx';
import Father from './components/Father.tsx';

function App() {

  type UserType = {
    name: string;
    age: number;
  }


  const [user, setUser] = useState<UserType>({
    name: 'dafd',
    age: 20
  });

  return (
    <div className="App">
      user.name={user.name}---user.age={user.age}
      <Button className="abc">click me!</Button>
      <Father />
    </div>
  );
}

export default App;

// npm install @types/react
