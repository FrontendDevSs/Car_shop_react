import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { BACKEND_URL } from "../../../config";
import Card from "../../ui/card/Card";
import "./topCars.scss";

const TopCars = () => {
  const { data: cars, loading, error } = useFetch(BACKEND_URL);
  const topCars = (cars ?? []).slice(0, 4);

  return (
    <section className="top-cars-section">
      <h2 className="top-cars-title">Top rated Cars</h2>
      <div className="top-cars-grid">
        {loading && <p>Loading...</p>}
        {error && <p>Failed to load Top Rated Cars.</p>}
        {!loading &&
          !error &&
          topCars.map((car) => <Card key={car._id} car={car} />)}
      </div>

      <Link to="/shop" className="top-cars-button">
        Shop Now
      </Link>
    </section>
  );
};

export default TopCars;
