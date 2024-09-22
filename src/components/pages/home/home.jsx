import React from "react";
import useMyContext from '../../../context/useMyContext';

const Home = () => {
	const { setTitle } = useMyContext()
	setTitle("Home")
	
  return (
    <div>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
