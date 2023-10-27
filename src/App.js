import React, {useState, useEffect} from "react";
import './App.css';
import { BrowserRouter, Route, Link,Routes } from "react-router-dom";
import Home from "./Orders";
import OrderPizza from "./OrderReview/2index";

const App = () => {
  const [activeOption, setActiveOption] = useState('home');

  return (
    <>
        <div className="navigator">
          <div className="logo">
            <h4>ITS PIZZA TIME </h4>
          </div>
          <div className="options">
            <nav>
              <Link className="nav-links" to="/">
                <button
                  className={activeOption === 'home' ? 'button-active' : 'button'}
                  onClick={() => setActiveOption('home')}
                >
                  Home
                </button>
              </Link>
              <Link className="nav-links" to="pizza">
                <button
                  className={activeOption === 'pizza' ? 'button-active' : 'button'}
                  onClick={() => setActiveOption('pizza')}
                >
                  Create Order
                </button>
              </Link>
            </nav>
          </div>
        </div>
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="pizza/*" element={<OrderPizza/>} />
        </Routes>
    </>
  );
};


export default App;
