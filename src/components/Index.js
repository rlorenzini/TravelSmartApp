import React, { useState, useEffect, useContext } from 'react';
// must import hooks from React separately
// Context Import
import { MainAppContext } from './providers/MainAppProvider';

function Index() {

  const [changingValue, setChangingValue] = useState("number was 12345")

  // must import every state and function you want to use
  // context does not need to be called inside {} when outside of render() function

  const { test, setTest, number, setNumber, boolean, setBoolean } = useContext(MainAppContext)

  useEffect((test) => {
    setTest("hello")
  })

  // this useEffect() is tracking a local state I just created with useState()
  // local useEffect() cannot track global/context states
  // would have to create a useEffect() in the provider to track global states
  useEffect(() => {
    console.log("useEffect() has triggered because changingValue has changed to: " + changingValue)
  }, [changingValue])

  // a function is defined with const and uses arrow syntax inside functional components
  const changeNumber = () => {
    if (boolean === true) {
      setBoolean(false)
      setChangingValue("number was 54321")
      setNumber(12345)
    } else if (boolean === false) {
      setBoolean(true)
      setChangingValue("number was 12345")
      setNumber(54321)
    }
  }

  // all global context, functions, and local functions are called inside {}
  // when inside of the render() function

  return (
    <div>
      <h1>Index</h1>
      <p>{test}</p>
      <button onClick={changeNumber}>Change Number</button>
      <p>{number}</p>
      <p>{changingValue}</p>
    </div>
  )
}

export default Index;
