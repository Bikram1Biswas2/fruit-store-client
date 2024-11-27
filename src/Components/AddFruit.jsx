const AddFruit = () => {

    const handleAddFruit = e =>{
        e.preventDefault()
        const form = e.target 
        const name = form.name.value 
        const price = form.price.value 
        const location = form.location.value 
        const photo = form.photo.value 
        const newFruit = {name,price,location,photo}
        console.log(newFruit);
    }

  return (
    <div>
      <h2 className="text-center mt-7 text-2xl font-bold text-pink-700">Add Fruit</h2>

      <form onSubmit={handleAddFruit} className="text-center space-y-3">
       <input
          type="text"
          name="name"
          placeholder="Fruit Name"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <br />
       <input
          type="text"
          name="price"
          placeholder="Fruit Price"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <br />
       <input
          type="text"
          name="location"
          placeholder="Fruit From(location)"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <br />
       <input
          type="text"
          name="photo"
          placeholder="Fruit Photo"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <br />
     
        <input className="btn bg-rose-400" type="submit" value="Add Fruit" />
      </form>
    </div>
  );
};

export default AddFruit;
