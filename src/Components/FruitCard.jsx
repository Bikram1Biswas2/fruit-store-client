import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const FruitCard = ({ fruit,setFruits,fruits }) => {
  const { _id, name, price, location, photo } = fruit;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/fruits/${_id}`,{
            method:"DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const remaining = fruits.filter(fr =>fr._id !== _id)
            setFruits(remaining)
          });
      }
    });
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={photo} alt="fruit" className="rounded-xl w-full h-[300px]" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name:{name}</h2>
        <p>Price:{price}</p>
        <p>From:{location}</p>
        <div className="card-actions">
          <Link to={`/updateFruit/${_id}`} className="btn btn-secondary">Update</Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-secondary"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FruitCard;
