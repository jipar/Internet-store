import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Main from './Components/Main';
import Navbar from './Components/Pages/Navbar';
import Categories from './Components/Pages/Categories';
import Contact from './Components/Pages/Contact';


class App extends React.Component {
  render() {
    return(
      <>
        <Router>
          {/* <Navbar/> */}
          <Routes>
            <Route path={'/'} element={<Main/>} />
            <Route path={'/Categories'} element={<Categories />} />
            <Route path={'/contact'} element={<Contact />} />
          </Routes>
        </Router>
      </>
    )
  }
}

export default App;
