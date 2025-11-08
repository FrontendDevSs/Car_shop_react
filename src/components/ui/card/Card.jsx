import { Link } from "react-router";
import { useState } from "react";
import getCarDetails from "../../../utils/getCarDetails";
import arrow from "../../../assets/icons/arrow.svg";
import bookmark from "../../../assets/icons/bookmark.svg";
import bookmarkFilled from "../../../assets/icons/bookmarkFilled.svg";
import "./card.scss";

const Card = ({ car }) => {
  const carDetails = getCarDetails(car);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <>
      {car && (
        <article className="card">
          <div
            className="card-bookmark"
            onClick={() => setBookmarked(!bookmarked)}
          >
            <img
              className="card-bookmark-icon"
              src={bookmarked ? bookmarkFilled : bookmark}
              alt="bookmark-icon"
            />
          </div>
          <img
            className="card-image"
            src={car.image}
            alt={`${car.brand}${car.model}`}
          />
          <div className="card-content">
            <div className="card-header">
              <h5 className="card-title">{`${car.brand} ${car.model} - ${car.year}`}</h5>
              <p className="card-description">{car.description.short}</p>
            </div>
            <div className="card-details">
              {carDetails.map((detail) => (
                <div key={detail.id} className="card-detail">
                  <img
                    className="card-detail-icon"
                    src={detail.icon}
                    alt={detail.value}
                  />
                  <p className="card-detail-value">{detail.value}</p>
                </div>
              ))}
            </div>
            <div className="card-footer">
              <p className="card-price">${car.price.toLocaleString()}</p>
              <Link to={`/shop/${car._id}`} className="card-link">
                <div className="card-link-content">
                  <p className="card-link-text">View Details</p>
                  <img className="card-arrow" src={arrow} alt="arrow" />
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