import useFetch from "../../hooks/useFetch";
import { BACKEND_URL } from "../../config";
import Card from "../../components/ui/card/Card";

const TopCars = () => {
  const { data: cars, loading, error } = useFetch(BACKEND_URL);
  const topCars = (cars ?? []).slice(0, 4);

  return (
    <>
      <section >
        <h2>Top rated Cars</h2>
        <div>
          {loading && <p>Loading...</p>}
          {error && <p>Failed to load Top Rated Cars.</p>}
          {!loading &&
            !error &&
            topCars.map((car) => <Card key={car._id} car={car} />)}
        </div>

        {/* Mario, dodaj button samo*/}
      </section>
    </>
  );
};

export default TopCars;
