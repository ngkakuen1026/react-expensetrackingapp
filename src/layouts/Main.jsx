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

const Main = () => {

  //Fetch the data from object userName created at function MainLoader 
  const {userName} = useLoaderData()

  return (
    <div className="layout">
        <CustomNavbar userName={userName} />
        <main>
          <Outlet/>
        </main>
    </div>
  );
};

export default Main;