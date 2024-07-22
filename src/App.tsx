  import React from 'react';
  import './App.css';
  import backgroundImage from './assets/background.jpg'; // Import the background image
import Blog from './components/blog/blog';

  function App() {
    return (
      <div className="app">
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <p>LukJac</p>
            <Blog/>
        </div>
      </div>
    );
  }

  export default App;
