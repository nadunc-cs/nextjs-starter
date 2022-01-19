import { createContext, useEffect, useState } from 'react';
// import { getCars } from '../api/carApi';
import { Car } from '../types/types';

const CarContext = createContext({});

// TODO: write types
const CarContextProvider = ({ children }) => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    // use APIs
    // const cars = getCars();
    // setCars(cars)
  }, []);

  return (
    <CarContext.Provider value={{ cars, setCars }}>
      {children}
    </CarContext.Provider>
  );
};

export { CarContext };
export default CarContextProvider;

// ----------------------------------------
//             EXAMPLE USAGE
// ----------------------------------------
//
//
// const ExampleContainer = () => {
//   return (
//     <CarContextProvider>
//       <CarList />
//     </CarContextProvider>
//   );
// };

// const CarList = () => {
//   const { cars, setCars } = useContext(CarContext);

//   return cars.map((car: Car) => {
//     return (
//       <div>
//         {car.make}: {car.model}
//       </div>
//     );
//   });
// };
