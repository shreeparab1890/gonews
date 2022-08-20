import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NewsBusiness from "./components/NewsBusiness";
import NewsEntertainment from "./components/NewsEntertainment";
import NewsEnvironment from "./components/NewsEnvironment";
import NewsHealth from "./components/NewsHealth";
import NewsPolitics from "./components/NewsPolitics";
import NewsScience from "./components/NewsScience";
import NewsSports from "./components/NewsSports";
import NewsTechnology from "./components/NewsTechnology";
import NewsWorld from "./components/NewsWorld";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  //API_KEY = "pub_10425c0ca64b54f77b8738b83cc6ded921739"; //technirmiti
  //API_KEY = "pub_10410549be92359c2bfd66cf231e090631555"; //shrikrishnaparab
  //API_KEY = "pub_104413b1e915a96029cc67d08f717d9bf53f6"; //amayparab
  API_KEY = "pub_104420ad73b8b37915e1321c1cb93a6d31c5d"; //technirmtisoftwares
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              key="top"
              element={
                <News
                  setProgress={this.setProgress}
                  category="top"
                  api={this.API_KEY}
                />
              }
            />
            <Route
              exact
              path="/business"
              key="business"
              element={
                <NewsBusiness
                  setProgress={this.setProgress}
                  category="business"
                  api={this.API_KEY}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              key="entertainment"
              element={
                <NewsEntertainment
                  setProgress={this.setProgress}
                  category="entertainment"
                  api={this.API_KEY}
                />
              }
            />
            <Route
              exact
              path="/environment"
              key="environment"
              element={
                <NewsEnvironment
                  setProgress={this.setProgress}
                  category="environment"
                  api={this.API_KEY}
                />
              }
            />
            <Route
              exact
              path="/health"
              key="health"
              element={
                <NewsHealth
                  setProgress={this.setProgress}
                  category="health"
                  api={this.API_KEY}
                />
              }
            />
            <Route
              exact
              path="/politics"
              key="politics"
              element={
                <NewsPolitics
                  setProgress={this.setProgress}
                  category="politics"
                  api={this.API_KEY}
                />
              }
            />
            <Route
              exact
              path="/science"
              key="science"
              element={
                <NewsScience
                  setProgress={this.setProgress}
                  category="science"
                  api={this.API_KEY}
                />
              }
            />
            <Route
              exact
              path="/sports"
              key="sports"
              element={
                <NewsSports
                  setProgress={this.setProgress}
                  category="sports"
                  api={this.API_KEY}
                />
              }
            />
            <Route
              exact
              path="/technology"
              key="technology"
              element={
                <NewsTechnology
                  setProgress={this.setProgress}
                  category="technology"
                  api={this.API_KEY}
                />
              }
            />
            <Route
              exact
              path="/world"
              key="world"
              element={
                <NewsWorld
                  setProgress={this.setProgress}
                  category="world"
                  api={this.API_KEY}
                />
              }
            />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
