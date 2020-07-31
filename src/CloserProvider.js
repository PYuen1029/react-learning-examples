import MyContext from './MyContext';
import React, {Component} from 'react';

class CloserProvider extends Component {
    state = {
        cars: {
            car001: { name: 'Mitsubishi', price: 50 },
            car002: { name: 'Kia', price: 300 },
            car003: { name: 'Jaguar', price: 2000 }
        }
    };

    render() {
        return (
            <MyContext.Provider
                value={{
                    cars: this.state.cars,
                    incrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price + 1;
                        this.setState({
                            cars
                        });
                    },
                    decrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price - 1;
                        this.setState({
                            cars
                        });
                    }
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export default CloserProvider
