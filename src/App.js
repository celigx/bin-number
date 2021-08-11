import { useEffect, useState } from 'react';
import './App.sass';
import Card from './components/Card';
import Title from './components/Title';
import Input from './components/Input';
import Output from './components/Output';


function App() {
  const [bin, setBin] = useState('');
  const [binData, setbinData] = useState({
    country: '-',
    flag: '-',
    bank: '-',
    scheme: '-',
    brand: '-',
    type: '-',
    prepaid: '-',
    luhn: '-',
  })

  useEffect(() => {
    // Show bin data when input length is 4 or more
    if (bin.length >= 4) {
      fetchBin();
    }
  }, [bin])

  const fetchBin = () => {
    fetch(`https://lookup.binlist.net/${bin}`)
      .then(response => response.json())
      .then(data => {
        setbinData((prevState) => ({
          ...prevState,
          country: data.country === undefined ? '-' : data.country.name,
          flag: data.country === undefined ? '-' : data.country.emoji,
          bank: data.bank === null ? '-' : data.bank.name,
          scheme: data.scheme,
          brand: data.brand === null ? '-' : data.brand,
          type: data.type === null ? '-' : data.type,
          prepaid: data.prepaid,
          luhn: data.number === undefined ? '-' : data.number.luhn,
        }))
        console.log(data);
      })
  }

  return (
    <div className="app">

      <Title />

      <div className="binContainer">

        <Card 
          bin={bin}
          flag={binData.flag}
          country={binData.country}
          scheme={binData.scheme}
        />

        <div className="inputOutputContainer">

          <Input
            bin={bin}
            setBin={setBin}
          />
          
          <Output 
            binData={binData} 
          />

        </div>

      </div>

    </div>
  );
}

export default App;
