const Output = ({ binData }) => {
  return(
    <div className="output">
      <div className="firstRow flex">
        <div className="country">
          <h6 className="title">COUNTRY</h6>
          <h5 className="text">{binData.country}</h5>
        </div>
        <div className="bank">
          <h6 className="title">BANK</h6>
          <h5 className="text">{binData.bank}</h5>
        </div>
      </div>

      <div className="secondRow flex">
        <div className="country">
          <h6 className="title">SCHEME/NETWORK</h6>
          <h5 className="text">{binData.scheme}</h5>
        </div>
        <div className="bank">
          <h6 className="title">BRAND</h6>
          <h5 className="text">{binData.brand}</h5>
        </div>
      </div>

      <div className="thirdRow flex">
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
  )
}

export default Output;