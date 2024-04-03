import React, { useState } from 'react';

// Helper functions
import { fetchData } from '../helerps';
import { useLoaderData } from 'react-router-dom';
import Register from './Register';
import { toast } from 'react-toastify';

// Loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

// Action
export async function dashboardAction({request}) {
    const data = await request.formData();
    const formData = Object.fromEntries(data);
    try {
        throw new Error("Ya Done")
        // localStorage.setItem("userName", JSON.stringify(formData.userName))
        // return toast.success(`Hi, ${formData.userName}`);
    } catch (e) {
        throw new Error("There was a problem with creating your account.")
    }

}

const Dashboard = () => {

    //Fetch the data from object userName created at function dashboardLoader 
    const {userName} = useLoaderData()

    return (
        <>
            {userName ? (<p>{userName}</p>) : (<Register />)}
        </>
  );
};

export default Dashboard;