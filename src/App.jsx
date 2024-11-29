import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import FruitCard from "./Components/FruitCard";

function App() {
  const fruits = useLoaderData()
  console.log(fruits);
  return (
    <>
   
      <h1 className="text-4xl text-pink-500 text-center mt-6">Fruit Store</h1>
      <h2 className="text-4xl text-pink-500 text-center mt-6">Fruits:{fruits.length}</h2>
    <div className="text-center mt-10">
    <Link to="/addFruit"><span className="text-xl mt-7 bg-lime-200 w-fit p-3 rounded-md">Add Fruit</span></Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        fruits.map(fruit=> <FruitCard key={fruits._id} fruit={fruit}></FruitCard>)
      }
    </div>
    </>
  );
}

export default App;
