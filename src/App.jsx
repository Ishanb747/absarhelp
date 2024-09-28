import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import CustomWorkspace from './pages/Workspace';
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        {/* Define the routes for Homepage and CustomWorkspace */}
        <Routes>
          {/* Main homepage route */}
          <Route path="/" element={<Homepage />} />
          
          {/* Route for the custom workspace */}
          <Route path="/workspace" element={<CustomWorkspace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
