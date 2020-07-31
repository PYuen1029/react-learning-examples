import React, {Fragment} from 'react';
import Car from "./Car";
import MyContext from "./MyContext";

const Cars = () => (
    <MyContext.Consumer>
        {context => {
            context.cars = {
                car001: { name: 'Nissan', price: 300 },
                car002: { name: 'Buick', price: 250 },
                car003: { name: 'Jeep', price: 300 }
            }

            return (
                <Fragment>
                    <h4>Cars:</h4>
                    {Object.keys(context.cars).map(carID => (
                        <Car
                            key={carID}
                            name={context.cars[carID].name}
                            price={context.cars[carID].price}
                            incrementPrice={() => context.incrementPrice(carID)}
                            decrementPrice={() => context.decrementPrice(carID)}
                        />
                    ))}
                </Fragment>
            );
        }}
    </MyContext.Consumer>
);

export default Cars;
