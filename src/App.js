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

export default class App extends Component {
  API_KEY = "pub_10425c0ca64b54f77b8738b83cc6ded921739";
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              key="top"
              element={<News category="top" api={this.API_KEY} />}
            />
            <Route
              exact
              path="/business"
              key="business"
              element={<NewsBusiness category="business" api={this.API_KEY} />}
            />
            <Route
              exact
              path="/entertainment"
              key="entertainment"
              element={
                <NewsEntertainment
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
                <NewsEnvironment category="environment" api={this.API_KEY} />
              }
            />
            <Route
              exact
              path="/health"
              key="health"
              element={<NewsHealth category="health" api={this.API_KEY} />}
            />
            <Route
              exact
              path="/politics"
              key="politics"
              element={<NewsPolitics category="politics" api={this.API_KEY} />}
            />
            <Route
              exact
              path="/science"
              key="science"
              element={<NewsScience category="science" api={this.API_KEY} />}
            />
            <Route
              exact
              path="/sports"
              key="sports"
              element={<NewsSports category="sports" api={this.API_KEY} />}
            />
            <Route
              exact
              path="/technology"
              key="technology"
              element={
                <NewsTechnology category="technology" api={this.API_KEY} />
              }
            />
            <Route
              exact
              path="/world"
              key="world"
              element={<NewsWorld category="world" api={this.API_KEY} />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
