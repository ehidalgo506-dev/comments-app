import React, { useEffect, useState } from 'react';
import Header from './Components/Layout/Header';
import Main from './Components/Layout/Main';
import LoginForm from './Components/LoginForm/LoginForm';
import dummyData from './data.json';

const data = Object.assign({}, dummyData);

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const getUserSubmited = (user) => setIsLogged(user);
  const logoutHandler = (logout) => setIsLogged(logout);
  const addNewUserHandler = (user) => {
    data.registeredUsers.push(user);
    data.currentUser = { ...user };
  };

  useEffect(() => {
    const isLogged = localStorage.getItem('isLogged');
    const currentUser = localStorage.getItem('currentUser');
    data.currentUser = { currentUser };
    setIsLogged(isLogged);
  }, [isLogged]);

  return (
    <React.Fragment>
      <Header isLogged={isLogged} onLogout={logoutHandler} onUsername={data} />
      {!isLogged && (
        <LoginForm
          data={data}
          onGetUserSubmited={getUserSubmited}
          onAddNewUser={addNewUserHandler}
        />
      )}
      {isLogged && <Main data={data} />}
    </React.Fragment>
  );
}

export default App;
