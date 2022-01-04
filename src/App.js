import React, { useEffect, useState } from 'react';
import Header from './Components/Layout/Header';
import LoginForm from './Components/LoginForm/LoginForm';
import dummyData from './data.json';

function App() {
  const data = Object.assign({}, dummyData);
  const [isLogged, setIsLogged] = useState(false);

  const getUserSubmited = (user) => setIsLogged(user);
  const logoutHandler = (logout) => setIsLogged(logout);
  const addNewUserHandler = (user) => {
    data.registeredUsers.push(user);
  };

  useEffect(() => {
    const isLogged = localStorage.getItem('isLogged');
    setIsLogged(isLogged);
  }, [isLogged]);

  return (
    <div>
      <Header isLogged={isLogged} onLogout={logoutHandler} onUsername={data} />
      {!isLogged && (
        <LoginForm
          data={data}
          onGetUserSubmited={getUserSubmited}
          onAddNewUser={addNewUserHandler}
        />
      )}
    </div>
  );
}

export default App;
