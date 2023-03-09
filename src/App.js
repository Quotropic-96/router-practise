import './App.css';
import {
  Route, Routes
} from 'react-router-dom';
import Home from './views/Home';
import Contact from './views/Contact'
import Projects from './views/Projects'
import ErrorPage from './views/ErrorPage'
import NavBar from './components/NavBar';
import ProjectsGames from './components/ProjectsGames'
import ProjectsApps from './components/ProjectsApps'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>}>
          <Route path='games' element={<ProjectsGames />}></Route>
          <Route path='apps' element={<ProjectsApps />}></Route>
        </Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
