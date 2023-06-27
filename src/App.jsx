import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Courses from './pages/Courses';
import CourseDetails from './pages/Courses/details';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/courses' element={<Courses/>} />
      <Route path='/courses/:slug' element={<CourseDetails/>} />
      
    </Routes>
   </Router>
  );
}

export default App;
