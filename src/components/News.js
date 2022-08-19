import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      nextPage: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsdata.io/api/1/news?apikey=pub_10410549be92359c2bfd66cf231e090631555&country=in&language=en&page=0";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.results,
      totalResults: parseData.totalResults,
      nextPage: parseData.nextPage,
    });
    console.log(this.state.totalResults);
  }

  handlePrev = async () => {
    let url = `https://newsdata.io/api/1/news?apikey=pub_10410549be92359c2bfd66cf231e090631555&country=in&language=en&page=${
      this.state.nextPage - 2
    }`;

    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.results,
      nextPage: parseData.nextPage,
    });
  };

  handleNext = async () => {
    let url = `https://newsdata.io/api/1/news?apikey=pub_10410549be92359c2bfd66cf231e090631555&country=in&language=en&page=${this.state.nextPage}`;
    console.log(url);
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData.results);
    console.log(parseData.nextPage);
    this.setState({
      articles: parseData.results,
      nextPage: parseData.nextPage,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h2 style={{ textAlign: "center" }}>GoNews: Top Headlines India</h2>

        <div className="row my-4">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3 my-4" key={element.link}>
                <NewsItem
                  title={element.title?.slice(0, 60)}
                  discription={element.description?.slice(0, 88)}
                  newsUrl={element.link}
                  imgUrl={element.image_url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.nextPage <= 1}
            type="button"
            className="btn btn-secondary"
            onClick={this.handlePrev}
            id="prev"
          >
            &laquo; Previous
          </button>
          <button
            disabled={this.state.nextPage == null}
            type="button"
            className="btn btn-secondary"
            onClick={this.handleNext}
            id="next"
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
