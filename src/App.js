// libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

// style
import './App.css';

// pages
import BasicFetch1Page from './Page/BasicFetch1Page'
import FetchUsingAxios1Page from './Page/FetchUsingAxios1Page';
import BasicFetch2Page from './Page/BasicFetch2Page'
import FetchUsingAxios2Page from './Page/FetchUsingAxios2Page';
import ExercisePage from './Page/ExercisePage';

function App() {
  return (
    <Router>
      <div className="navigation">
        <Link to='/'>Basic Fetch 1</Link>
        <Link to='/axios1'>Fetch Axios 1</Link>
        <Link to='/fetch2'>Basic Fetch 2</Link>
        <Link to='/axios2'>Fetch Axios 2</Link>
        <Link to='/exercise'>Exercise</Link>
      </div>

      <Routes>
        <Route path='/' exact element={<BasicFetch1Page />}/>
        <Route path='/axios1' element={<FetchUsingAxios1Page />}/>
        <Route path='/fetch2' element={<BasicFetch2Page />}/>
        <Route path='/axios2' element={<FetchUsingAxios2Page />}/>
        <Route path='/exercise' element={<ExercisePage />}/>
      </Routes>
    </Router>
  );
}

export default App;
