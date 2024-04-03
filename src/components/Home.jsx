import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BgSlow from '../assets/homebg_slow.gif';

export function HomeLoader() {
  
}

const Home = () => {
  const [username, setUsername] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="home flex items-center justify-center h-screen"
    style={{ backgroundImage: `url(${BgSlow})`, backgroundSize: 'cover'}}>
      <div className="text-center">
        <div className="box">
          <h1 className="text-6xl font-bold pb-6">Calculate Your Expenses and Budget!</h1>
          
          <input type="text" value={username} onChange={handleInputChange} placeholder="Enter your username" 
          className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black-600 text-center text-2xl"/>
          
          <h1 className="text-4xl text-black pt-6">
            <Link to={`/dashboard?username=${username}`} className="text-gray-500 hover:text-gray-700">
                Press Here to start!
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;