import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateFruit = () => {
     const fruit = useLoaderData()
     const { _id, name, price, location, photo } = fruit;

    const handleUpdateFruit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const location = form.location.value;
        const photo = form.photo.value;
        const updatedFruit = { name, price, location, photo };
        console.log(updatedFruit);
    
        fetch(`http://localhost:5000/fruits/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedFruit)
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.modifiedCount){
                Swal.fire({
                    title: "Good job!",
                    text: "Fruit Updated Successfully",
                    icon: "success"
                  });
            }
          });
      };
    return (
        <div>
            <h2 className="text-3xl text-center text-pink-500 mt-6 mb-6">Update Fruit</h2>
            <form onSubmit={handleUpdateFruit} className="text-center space-y-3">
        <input
          type="text"
          name="name"
          defaultValue={name}
          placeholder="Fruit Name"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <br />
        <input
          type="text"
          name="price"
          defaultValue={price}
          placeholder="Fruit Price"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <br />
        <input
          type="text"
          name="location"
          defaultValue={location}
          placeholder="Fruit From(location)"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <br />
        <input
          type="text"
          name="photo"
          defaultValue={photo}
          placeholder="Fruit Photo"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <br />

        <input className="btn bg-rose-400" type="submit" value="Update Fruit" />
      </form>
        </div>
    );
};

export default UpdateFruit;