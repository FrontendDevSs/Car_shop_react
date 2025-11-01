import Button from "./components/ui/button/Button";
import Home from "./pages/Home/Home";
import useFetch from "./hooks/useFetch";
import { BACKEND_URL } from "./config";
import Card from "./components/ui/card/Card.jsx";
import TopCars from "./pages/Home/TopCars.jsx";

function App() {
  const { data: cars, loading, error } = useFetch(BACKEND_URL);
  console.log(cars);
  console.log(error);
  console.log(loading);

  return <></>;
}

export default App;
