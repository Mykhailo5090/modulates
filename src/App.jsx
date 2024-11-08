import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/footer';
import Page1 from '../src/pages/page1';
import Page2 from '../src/pages/page2';

function App() {
  const firstName = "Міша"; 
  const lastName = "Данканич";
  const group = "Група";      
  const city = "Місто"; 
  const hobby = "Хобі";     

  return (
    <Router>
      <Header firstName={firstName} lastName={lastName} />
      <nav>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
      </nav>
      <Routes>
        <Route path="/page1" element={<Page1 city={city} />} />
        <Route path="/page2" element={<Page2 hobby={hobby} />} />
      </Routes>
      <Footer group={group} />
    </Router>
  );
}

export default App;
