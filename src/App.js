import React from "react";
import store from "./store";
import { Provider } from "react-redux";


import Header from "./component/Header";

import { Routes, Route } from "react-router-dom";

import CategoryPage from "./route/CategoryPage";
import ProductPage from "./route/ProductPage";
import CartPage from "./route/CartPage";

import "./styles/global.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Header />
          <Routes location={this.props.location}>
          <Route path="/" exact element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/Cart" element={<CartPage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        </Provider>
      </div>
    );
  }
}

export default App;
