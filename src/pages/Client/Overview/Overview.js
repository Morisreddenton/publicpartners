import React, { useState } from 'react'
import Scn from '../Interface/Scn/Scn'
import Pia from '../Interface/Pia/Pia'
import Adwo from '../Interface/Adwo/Adwo'

const Overview = () => {
  const [isScn, setIsScn] = useState(true);
  const [isPia, setIsPia] = useState(false);
  const [isAdwo, setIsAdwo] = useState(false);
  return (
    <>
     {isScn && <Scn setIsScn={setIsScn} />}
     {isPia && <Pia setIsPia={setIsPia} />}
     {isAdwo && <Adwo setIsAdwo={setIsAdwo} />}
    </>
  )
}

export default Overview