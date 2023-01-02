import './App.css';
import Copyright from './components/Copyright';
import NavBar from './components/NavBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Contents
import Profile from './contents/Profile/Profile';
import Skills from './contents/Skills/Skills';
import Educations from './contents/Educations/Educations';
import Experiences from './contents/Experiences/Experiences';
import Socials from './contents/Socials/Socials';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route index path='Portfolio-React/' element={<Profile />} />
          <Route path={'Portfolio-React/skills'} element={<Skills/>}/>
          <Route path={'Portfolio-React/educations'} element={<Educations />}/>
          <Route path={'Portfolio-React/experiences'} element={<Experiences />}/>
          <Route path={'Portfolio-React/socials'} element={<Socials />}/>
          <Route path={'Portfolio-React/:id'} element={'Not have page in my link'} /> {/*IF not have page show this */}
        </Routes>
        

        <Copyright />
      </div>
    </BrowserRouter>

  );
}

export default App;
