import React from 'react';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import VehicleDataComponent from './components/VehicleDataComponent';

const App = () => {
  return (
    <div>
      <RegisterComponent />
      <LoginComponent />
      <VehicleDataComponent />
    </div>
  );
};

export default App;