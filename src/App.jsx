import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Courses from './pages/Courses';
import CourseDetails from './pages/Courses/details';
import SingleCourse from './pages/Courses/description';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/courses' element={<Courses/>} />
      <Route path='/courses/:slug' element={<CourseDetails/>} />
      <Route path='/courses/desc' element={<SingleCourse/>}/>
      
    </Routes>
   </Router>
  );
}

export default App;
