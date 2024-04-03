import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import BgSlow from '../assets/homebg_slow.gif';

// Components
import CustomNavbar from '../components/CustomNavbar';

// Helper functions
import { fetchData } from '../helerps';
import { Outlet, useLoaderData } from 'react-router-dom';

// Loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Temp = () => {

  //Fetch the data from object userName created at function MainLoader 
  const {userName} = useLoaderData()

  return (
    <div className="layout">
        <CustomNavbar userName={userName} />
        <main>
          <Outlet/>
        </main>
        <div className="home flex items-center justify-center h-screen"
        style={{ backgroundImage: `url(${BgSlow})`, backgroundSize: 'cover'}}>
          <div className="text-center">
            <div className="box">
              <h1 className="text-6xl font-bold pb-6">Calculate Your Expenses and Budget!</h1>
              
              <input type="text" value={userName} onChange={handleInputChange} placeholder="Enter your username" 
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black-600 text-center text-2xl"/>
              
              <h1 className="text-4xl text-black pt-6">
                <Link to="/" className="text-gray-500 hover:text-gray-700">
                    Press Here to start!
                </Link>
              </h1>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Temp;