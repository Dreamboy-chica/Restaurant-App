import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Navbar from "./Navbar";
import Shimmer from "./Shimmer";
import Ct from './Ct';
import useOnlineStatus from "./useOnlineStatus";

function App() {
  const [originalRecipes, setOriginalRecipes] = useState([]); // Original data
  const [recipes, setRecipes] = useState([]); // Duplicate copy of data
  const [searchText, setSearchText] = useState(""); // Search state
  const [cart, setCart] = useState([]); // Add to cart

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes")
      .then((res) => {
        setOriginalRecipes(res.data.recipes); // Store original data
        setRecipes(res.data.recipes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const seafun = (e) => {
    setSearchText(e.target.value);
  };

  const filterfun = () => {
    const filtered = originalRecipes.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRecipes(filtered);
  };

  const filterByRating = () => {
    const newData = originalRecipes.filter(item => item.rating > 4.8);
    setRecipes(newData);
  };

  const filterByMealType = (mealType) => {
    const newData = originalRecipes.filter(item => item.mealType.includes(mealType));
    setRecipes(newData);
  };

  // useOnline hooks for showing internet status
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (<h4>Looks like you are offline! Please check your internet connection!</h4>);

  // Add to cart functionality
  const addToCart = (item) => {
    console.log('Adding to cart:', item);
    setCart(prevCart => {
      const updatedCart = [...prevCart, item];
      console.log('Updated cart:', updatedCart); // Log updated cart
      return updatedCart; // Return the new cart state
    });
  };

  if (originalRecipes.length === 0) return <Shimmer />;

  return (
    <div>
      <Ct.Provider value={{ searchText, seafun, filtered: filterfun, setSearchText }}>
        <Navbar />
      </Ct.Provider>

      <div className="filterdata">
        <button type="button" className="btn" onClick={filterByRating}>Rating: 4+</button>
        <button type="button" className="btn" onClick={() => filterByMealType("Breakfast")}>Breakfast</button>
        <button type="button" className="btn" onClick={() => filterByMealType("Lunch")}>Lunch</button>
        <button type="button" className="btn" onClick={() => filterByMealType("Dinner")}>Dinner</button>
      </div>

      <div className='wrapper'>
        {recipes.length === 0 ? (
          <div>No recipes found</div>
        ) : (
          recipes.map((item) => (
            <div className='cards' key={item.id}>
              <img src={item.image} alt="no-data" />
              <div className="cardgap">
                <div className='name'>
                  <span>{item.name}</span>
                </div>
                <div className="cuisine">
                  <span>{item.cuisine}</span>
                  <span className="add" onClick={() => addToCart(item)}>
                    <button>Add +</button>
                  </span>
                </div>
                <div className="dis">
                  <div>{(item.prepTimeMinutes) / 10} km</div>
                  <div className="backrating">
                    <div className='rating'>{item.rating}<i className="fa-solid fa-star"></i></div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
