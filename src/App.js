import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from '../src/components/Login';
import ProductList from '../src/components/ProductList';

const App = () => (
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
    </main>
  </div>
);
export default App;