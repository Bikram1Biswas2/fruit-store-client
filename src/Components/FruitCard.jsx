

const FruitCard = ({fruit}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={fruit.photo}
            alt="fruit"
            className="rounded-xl w-full h-[300px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name:{fruit.name}</h2>
          <p>Price:{fruit.price}</p>
          <p>From:{fruit.location}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default FruitCard;