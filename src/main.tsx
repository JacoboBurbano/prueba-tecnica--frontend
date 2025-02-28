import React, { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterUser from './register/RegisterUser';
import RegisterActivity from './register/RegisterActivity';
import Activities from './activities/Activities';
import MainPage from './main/Main';
import './index.css'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/register-user' element={<RegisterUser />} />
        <Route path='/register-activity' element={<RegisterActivity/>}/>
        <Route path='/activities' element={<Activities />} />
      </Routes>
    </Router>
  );
};


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
