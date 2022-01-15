import React, { useEffect, useState } from 'react';
import Header from './Components/Layout/Header';
import Main from './Components/Layout/Main';
import LoginForm from './Components/LoginForm/LoginForm';
import dummyData from './data.json';
import dataContext from './store/GlobalState';

const data = Object.assign({}, dummyData);
function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [updateData, setUpdateData] = useState(data);

  const getUserSubmited = (user) => setIsLogged(user);
  const logoutHandler = (logout) => setIsLogged(logout);

  useEffect(() => {
    const isLogged = localStorage.getItem('isLogged');
    const currentUser = localStorage.getItem('currentUser');
    data.currentUser = { currentUser };
    setIsLogged(isLogged);
  }, [isLogged]);

  return (
    <dataContext.Provider value={[updateData, setUpdateData]}>
      <Header isLogged={isLogged} onLogout={logoutHandler} />
      {!isLogged && <LoginForm onGetUserSubmited={getUserSubmited} />}
      {isLogged && <Main />}
    </dataContext.Provider>
  );
}

export default App;
