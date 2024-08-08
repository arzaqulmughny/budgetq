import React from 'react';
import SplashScreen from './src/screens/Splash';
import Onboarding from './src/screens/Onboarding';

/**
 * Root / Main Screen
 */
const App = () => {
  return (
    <>
      {/* <SplashScreen show version="0.1" /> */}
      <Onboarding />
    </>
  );
};

export default App;
