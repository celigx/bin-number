import { useState } from 'react';
import './App.sass';
import Card from './components/Card';

function App() {
  const [bin, setBin] = useState('3775');

  const fetchBin = () => {
    fetch(`https://lookup.binlist.net/${bin}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }

  return (
    <div className="app">
      <Card bin={bin} />
    </div>
  );
}

export default App;
