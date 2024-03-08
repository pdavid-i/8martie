import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tabuleh from './Tabuleh';
import Wish from './Wish';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/8martie" element={<Tabuleh/>} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;