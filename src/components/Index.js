import React, { useEffect, useContext } from 'react';
// must import hooks from React separately
// Context Import
import { MainAppContext } from './providers/MainAppProvider';

function Index() {

  // must import every state and function you want to use

  const { test, setTest, number, setNumber, boolean, setBoolean } = useContext(MainAppContext)

  useEffect((test) => {
    setTest("hello")
  })

  // a function is defined with const and uses arrow syntax inside functional components
  const changeNumber = () => {
    // context does not need to be called inside {} when outside of render() function
    if (boolean === true) {
      setBoolean(false)
      setNumber(12345)
    } else if (boolean === false) {
      setBoolean(true)
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
    </div>
  )
}

export default Index;
