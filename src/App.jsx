import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Navbar from "./Navbar";
import Shimmer from "./Shimmer";

function AxiosData() {
  const [recipes, setRecipes] = useState([]);
  const [originalRecipes, setOriginalRecipes] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes")
      .then((res) => {
        setRecipes(res.data.recipes);
        setOriginalRecipes(res.data.recipes); // Store original data
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Function to filter data by rating
  const filterByRating = () => {
    const newData = originalRecipes.filter(item => item.rating > 4.8);
    setRecipes(newData);
  };

  // Unified function to filter data by meal type
  const filterByMealType = (mealType) => {
    const newData = originalRecipes.filter(item => item.mealType.includes(mealType));
    setRecipes(newData);
  };

  // // Reset the recipes to original
  // const resetFilters = () => {
  //   setRecipes(originalRecipes);
  // };


  //Shimmer UI/Conditional rendering/ return a>b?a:b
  // if(originalRecipes.length==0)
  // {
  //   return <Shimmer/>
  // }

  return originalRecipes.length==0?<Shimmer/>:(
    <div> 
      <Navbar/> 

      <div className="filterdata">     
        <button type="button" className="btn" onClick={filterByRating}>Rating: 4+</button>
        <button type="button" className="btn" onClick={() => filterByMealType("Breakfast")}>Breakfast</button>
        <button type="button" className="btn" onClick={() => filterByMealType("Lunch")}>Lunch</button>
        <button type="button" className="btn" onClick={() => filterByMealType("Dinner")}>Dinner</button>
        {/* <button type="button" className="btn" onClick={resetFilters}>Reset</button> */}
      </div>   

      <div className='wrapper'>
        {recipes.map((item) => (
          <div className='cards' key={item.id}> 
            <img src={item.image} alt="no-data" /> 
            <div className="cardgap">
              <div className='name'>{item.name}</div>
              <div className="cuisine">{item.cuisine}</div>
              <div className="dis"> 
                <div>{(item.prepTimeMinutes) / 10} km</div>
                <div className="backrating"> 
                  <div className='rating'>{item.rating}<i className="fa-solid fa-star"></i></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ); 
}

export default AxiosData;
