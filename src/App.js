import { Outlet } from 'react-router-dom';
import Navigation from './pages/Navigation/Navigation';

import "./styles/App.css"



export function App() {
  return (
    <div id='app' className={'App component'}>
      <span>App</span>
      <Navigation />
      <Outlet />
    </div>
  )
}


export function promiseFor(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  })
}


