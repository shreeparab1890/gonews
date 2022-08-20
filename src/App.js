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
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" key="top" element={<News category="top" />} />
            <Route
              exact
              path="/business"
              key="business"
              element={<NewsBusiness category="business" />}
            />
            <Route
              exact
              path="/entertainment"
              key="entertainment"
              element={<NewsEntertainment category="entertainment" />}
            />
            <Route
              exact
              path="/environment"
              key="environment"
              element={<NewsEnvironment category="environment" />}
            />
            <Route
              exact
              path="/health"
              key="health"
              element={<NewsHealth category="health" />}
            />
            <Route
              exact
              path="/politics"
              key="politics"
              element={<NewsPolitics category="politics" />}
            />
            <Route
              exact
              path="/science"
              key="science"
              element={<NewsScience category="science" />}
            />
            <Route
              exact
              path="/sports"
              key="sports"
              element={<NewsSports category="sports" />}
            />
            <Route
              exact
              path="/technology"
              key="technology"
              element={<NewsTechnology category="technology" />}
            />
            <Route
              exact
              path="/world"
              key="world"
              element={<NewsWorld category="world" />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
