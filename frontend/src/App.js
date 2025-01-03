import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';
import './App.css';
import Home from './Home';
import SystemStatus from "./SystemStatus";
import TrafficStatus from "./TrafficStatus";
import ContainerStatus from "./ContainerStatus";
import EndpointStatus from "./EndpointStatus";

function Nav() {
  const location = useLocation();

  return (
      <nav>
          <img src={`${process.env.PUBLIC_URL}/icon-removebg-preview.png`} alt=""/>

          <ul>
              <li>
                  <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
              </li>
              <li>
                  <Link to="/containerStatus" className={location.pathname === '/containerStatus' ? 'active' : ''}>Container
                      Status</Link>
              </li>
              <li>
                  <Link to="/endpointStatus" className={location.pathname === '/endpointStatus' ? 'active' : ''}>Endpoint
                      Status</Link>
              </li>
              <li>
                  <Link to="/trafficStatus" className={location.pathname === '/trafficStatus' ? 'active' : ''}>Traffic</Link>
              </li>
              <li>
                  <Link to="/systemStatus" className={location.pathname === '/systemStatus' ? 'active' : ''}>Resources</Link>
              </li>
          </ul>
      </nav>
  );
}

function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>

                <main>
                <h1>Health Monitoring Dashboard</h1>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/containerStatus" element={<ContainerStatus />} />
                        <Route path="/endpointStatus" element={<EndpointStatus />} />
                        <Route path="/trafficStatus" element={<TrafficStatus />} />
                        <Route path="/systemStatus" element={<SystemStatus />} />
                    </Routes>
                </main>
            </div>
        </Router>
  );
}

export default App;
