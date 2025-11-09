import { useParams } from "react-router";
import { BACKEND_URL } from "../../config";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router";
import "./carDetails.scss";
import { useQuantityStore, useCartStore } from "../../store/useStore";

const CarDetails = () => {
  const { id } = useParams();
  const { data: car, loading, error } = useFetch(`${BACKEND_URL}/${id}`);
  const { quantity, incrementQuantity, decrementQuantity } = useQuantityStore();
  const { addToCart } = useCartStore();

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {car && (
        <section className="car-details">
          <h1 className="car-details-title">Car info</h1>
          <article className="car-details-card">
            <Link to="/shop" className="car-details-link">
              Go Back
            </Link>
            <div className="car-layout">
              <img
                className="car-image"
                src={car.image}
                alt={`${car.brand} - ${car.model}`}
              />
              <div className="car-info">
                <h3 className="car-name">{`${car.brand} - ${car.model}`}</h3>
                <p className="car-description">{`${car.description.long}`}</p>
                <div className="car-specs">
                  <p>
                    Year: <span>{car.year}</span>
                  </p>
                  <p>
                    Color: <span>{car.color}</span>
                  </p>
                  <p>
                    Fuel: <span>{car.fuelType}</span>
                  </p>
                </div>
                <p className="car-price">$ {car.price.toLocaleString()}</p>
                <div className="car-actions">
                  <div className="car-quantity">
                    <button
                      onClick={decrementQuantity}
                      className="car-quantity-button"
                    >
                      -
                    </button>
                    <p className="car-quantity-value">{quantity}</p>
                    <button
                      onClick={incrementQuantity}
                      className="car-quantity-button"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => addToCart(car)}
                    className="car-to-cart button-primary"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </article>
        </section>
      )}
    </>
  );
};

export default CarDetails;
