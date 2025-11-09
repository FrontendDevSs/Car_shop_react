import { BACKEND_URL } from "../config";
import useFetch from "../hooks/useFetch";
import Card from "../components/ui/card/Card";

function Shop() {
  const { data: cars, loading, error } = useFetch(BACKEND_URL);
  const shopCars = cars?.slice(0, 12);
  console.log(shopCars);

  return (
    <>
      {!loading &&
        !error &&
        shopCars?.map((car) => <Card key={car._id} car={car} />)}
    </>
  );
}

export default Shop;
