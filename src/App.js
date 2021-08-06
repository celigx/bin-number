import { useEffect, useState } from 'react';
import './App.sass';
import Card from './components/Card';

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

  // Handle input change
  const handleChange = (e) => {
    setBin(e.target.value)
  }

  return (
    <div className="app">

      <Card 
        bin={bin}
        flag={binData.flag}
        country={binData.country}
        scheme={binData.scheme}
      />

      <div className="containerOutput">

        <div className="binInput">
          <h6 className="binTitle">BANK IDENTIFICATION NUMBER (BIN)</h6>
          <input type="tel" maxLength='6' value={bin} onChange={handleChange} placeholder='Enter the first 6 digits of the card' />
        </div>
        
        <div className="firstRow flex output">
          <div className="country">
            <h6 className="title">COUNTRY</h6>
            <h5 className="text">{binData.country}</h5>
          </div>
          <div className="bank">
            <h6 className="title">BANK</h6>
            <h5 className="text">{binData.bank}</h5>
          </div>
        </div>

        <div className="secondRow flex output">
          <div className="country">
            <h6 className="title">SCHEME/NETWORK</h6>
            <h5 className="text">{binData.scheme}</h5>
          </div>
          <div className="bank">
            <h6 className="title">BRAND</h6>
            <h5 className="text">{binData.brand}</h5>
          </div>
        </div>

        <div className="thirdRow flex output">
          <div className="type">
            <h6 className="title">TYPE</h6>
            <h5 className="text">{binData.type}</h5>
          </div>
          <div className="prepaid">
            <h6 className="title">PREPAID</h6>
            <h5 className="text">{binData.prepaid === '-' ? '-' : binData.prepaid === true ? 'Yes' : 'No'}</h5>
          </div>
          <div className="luhn">
            <h6 className="title">LUHN</h6>
            <h5 className="text">{binData.luhn === '-' ? '-' : binData.luhn === true ? 'Yes' : 'No'}</h5>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
