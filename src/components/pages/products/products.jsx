import React from "react";
import useMyContext from '../../../context/useMyContext';
import MyContainer from '../../compositions/container/container';
import Card from '../../compositions/card/card';


const Products = () => {
	const { setTitle } = useMyContext()
	setTitle("Productos")
  return (
    <MyContainer>
      <Card />
      <Card />
      <Card />
      <Card />
    </MyContainer>
  );
};

export default Products;
