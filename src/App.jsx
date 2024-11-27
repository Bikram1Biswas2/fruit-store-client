import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-4xl text-pink-500 text-center mt-6">Fruit Store</h1>

    <div className="text-center mt-10">
    <Link to="/addFruit"><span className="text-xl mt-7 bg-lime-200 w-fit p-3 rounded-md">Add Fruit</span></Link>
    </div>
    </>
  );
}

export default App;
