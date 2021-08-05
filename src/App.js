import { useEffect, useState } from 'react';
import './App.sass';
import Card from './components/Card';

function App() {
  const [bin, setBin] = useState('');

  useEffect(() => {
    if (bin.length >= 4) {
      fetchBin();
    }
  }, [bin])

  const fetchBin = () => {
    fetch(`https://lookup.binlist.net/${bin}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  }

  const handleChange = (e) => {
    setBin(e.target.value)
  }

  return (
    <div className="app">
      <Card bin={bin} />
      <input type="number" maxLength='6' value={bin} onChange={handleChange} />
    </div>
  );
}

export default App;
