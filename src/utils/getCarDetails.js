import mileage from "../assets/icons/mileage.svg";
import fuel from "../assets/icons/fuel.svg";
import gearbox from "../assets/icons/gearbox.svg";

const getCarDetails = (car) => {
  return [
    { id: 1, icon: mileage, value: `${car?.mileage} Miles`},
    { id: 2, icon: fuel, value: car?.fuelType },
    { id: 3, icon: gearbox, value: car?.transmission },
  ];
};

export default getCarDetails;
