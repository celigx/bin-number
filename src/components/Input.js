const Input = ({ bin, setBin }) => { 
  
    // Handle input change
    const handleChange = (e) => {
      setBin(e.target.value)
    }

  return (
    <div className="binInput">
        <h6 className="binTitle">BANK IDENTIFICATION NUMBER (BIN)</h6>
        <input type="tel" maxLength='6' value={bin} onChange={handleChange} placeholder='Enter the first 6 digits of the card' />
    </div>
  )
}

export default Input;