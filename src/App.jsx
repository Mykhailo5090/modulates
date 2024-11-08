import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/footer';
import Page1 from '../src/pages/page1';
import Page2 from '../src/pages/page2';

function App() {
  const firstName = "Михайло"; 
  const lastName = "Данканич";
  const group = "126 інформаційні системи";      
  const city = "Ужгород"; 
  const hobby = "Автомобілі";     

  return (
    <Router>
      <Header firstName={firstName} lastName={lastName} />
      <Routes>
        <Route path="/page1" element={<Page1 city={city} />} />
        <Route path="/page2" element={<Page2 hobby={hobby} />} />
      </Routes>
      <Footer group={group} />
    </Router>
  );
}

export default App;
