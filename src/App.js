import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<News />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
