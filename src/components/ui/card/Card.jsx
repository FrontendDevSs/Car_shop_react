import { Link } from "react-router";
import getCarDetails from "../../../utils/getCarDetails";
import arrow from "../../../assets/icons/arrow.svg";
import "./Card.scss";

const Card = ({ car }) => {
  const carDetails = getCarDetails(car);

  return (
    <>
      {car && (
        <article className="card">
          <img
            className="card__image"
            src={car.image}
            alt={`${car.brand}${car.model}`}
          />
          <div className="card__content">
            <div className="card__header">
              <h5 className="card__title">{`${car.brand} ${car.model} - ${car.year}`}</h5>
              <p className="card__description">{car.description.short}</p>
            </div>
            <div className="card__details">
              {carDetails.map((detail) => (
                <div key={detail.id} className="card__detail">
                  <img
                    className="card__detail-icon"
                    src={detail.icon}
                    alt={detail.value}
                  />
                  <p className="card__detail-value">{detail.value}</p>
                </div>
              ))}
            </div>
            <div className="card__footer">
              <p className="card__price">${car.price.toLocaleString()}</p>
              <Link to={`/shop/${car._id}`} className="card__link">
                <div className="card__link-content">
                  <p className="card__link-text">View Details</p>
                  <img className="card__arrow" src={arrow} alt="arrow" />
                </div>
              </Link>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default Card;
