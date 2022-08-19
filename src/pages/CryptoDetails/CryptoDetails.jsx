import React from 'react';
import {useParams} from 'react-router-dom'
const CryptoDetails = () => {
  const {coinID} = useParams()
  return (
    <div>CryptoDetails{coinID}</div>
  )
}

export default CryptoDetails