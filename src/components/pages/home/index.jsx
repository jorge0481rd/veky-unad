import React from "react";
import useMyContext from "../../../context/useMyContext";
import MyContainer from "../../compositions/my-container";

const Home = () => {
  const { setTitle } = useMyContext();
  setTitle("Home");

  return (
    <MyContainer id="home">
			<h1>This is home</h1>
		</MyContainer>
  );
};

export default Home;
