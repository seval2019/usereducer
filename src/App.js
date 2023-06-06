
import './App.css';
import {useReducer} from 'react';

function App() {
 useReducer(reducer,initialValue)
  return (
    <div className="App">
        <button>Arttır</button>
        <button>Azalt</button>
        <button>Sıfırla</button>
    </div>
  );
}

export default App;
