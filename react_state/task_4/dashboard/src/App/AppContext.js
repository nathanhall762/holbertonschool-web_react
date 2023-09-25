import React from 'react';

// Define a default user object
const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

// Define a default logOut function
const defaultLogOut = () => {};

// Create a React context with the default user object and logOut function
const AppContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

export default AppContext;
