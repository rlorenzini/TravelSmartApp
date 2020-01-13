import React, { useState,useEffect } from 'react';
//acts similar to a Redux store; create global states and functions here

export const MainAppContext = React.createContext();

const MainAppProvider = props => {
  // class components are hooks with specific roles
  // stateless/functional components were always hooks which never used hooks,
  // which limited their use
  // Facebook released hooks so now we have more control over our applications

  // useState() CANNOT be used in a stateful/class component since it technically
  // is already used (this.state = {} uses useState() behind the scenes)
  // this goes for all hooks and class components; designed like this by Facebook

  // const [state, setState] = useState('defaultStateValue')
  // call state to use state, setState is a function to set value to said state
  // default state is whatever you want

  const [test, setTest] = useState('testing');
  const [number, setNumber] = useState(12345);
  const [data,setData] = useState([]);
  const [object, setObject] = useState({key: "value"});
  const [boolean, setBoolean] = useState(false)

  // useEffect() controls ALL lifecycle components
  // useEffect() IS componentDidMount, componentDidUpdate, etc all in one
  // useEffect() always was the lifecycle, but we are now able to use it directly

  // useEffect() gets triggered during render and every update
  // useEffect((do something), []) gets triggered only during render
  // useEffect((do something), [state]) only triggers when said state updates
  // useEffect((do something), [can, watch, multiple, states])

  function useFetchDataToJson() {
    // forgot what this function does exactly; will have to look at my source repo
    useEffect(() => {
      fetch(data)
      .then(response => response.json())
      .then(data => setData(data));
    },[])
  }
  // pass all states and functions into the value={()}
  // {props.children} renders the child component (in this case BaseLayout)
  return (
    <MainAppContext.Provider
      value={{
        test,
        setTest,
        number,
        setNumber,
        data,
        setData,
        object,
        setObject,
        boolean,
        setBoolean,
        useFetchDataToJson
      }}
    >
      {props.children}
    </MainAppContext.Provider>
  )
}

export default MainAppProvider;
