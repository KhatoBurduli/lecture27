import React from 'react';
import './App.css';
import Router from './router/Router';
import { routes } from './router/routes';

const App:React.FC = () => {
  return (
    <>
{/* {<NavBar routes={routes} isVertical={true} />}     */}
<Router/>
    </>
  );
}

export default App;
