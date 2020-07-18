import React, {Component} from 'react';
import MyProvider from "./MyProvider";
import ProductList from "./ProductList";

class App extends Component {
    logo = 'google.com/logo.jpg';

    render() {
        return (
            <MyProvider>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Welcome to my web store</h1>
                    </header>
                    <ProductList />
                </div>
            </MyProvider>
        );
    }
}

export default App;
