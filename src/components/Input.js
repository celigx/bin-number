const Input = ({ bin, setBin }) => { 
  
  // Handle input change
  const handleChange = (e) => {
    // If input length is less than 6 allow typing, otherwise prevent typing
    if (e.target.value.length <= 6) {
      setBin(e.target.value)
    } else {
      return false
    }
  }

  return (
    <div className="binInput">
        <h6 className="binTitle">BANK IDENTIFICATION NUMBER (BIN)</h6>
        <input type="number" value={bin} onChange={handleChange} placeholder='Enter the first 6 digits of the card' />
    </div>
  )
}

export default Input;