import React, { useState,useEffect } from 'react';
//acts as the Redux store; create states and functions here
export const MainAppContext = React.createContext();

const MainAppProvider = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data,setData] = useState([]);

  function useFetchDataToJson() {

    useEffect(() => {
      fetch(data)
      .then(response => response.json())
      .then(data => setData(data));
    },[])
  }

  return (
    <MainAppContext.Provider
      value={{
        username,
        password,
        data,
        useFetchDataToJson
      }}
    >
      {props.children}
    </MainAppContext.Provider>
  )
}

export default MainAppProvider;
