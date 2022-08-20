import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class NewsEntertainment extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      nextPage: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsdata.io/api/1/news?apikey=${this.props.api}&country=in&category=${this.props.category}&language=en&page=0`;
    this.setState({ loading: true });
    let data = await fetch(url);
    console.log(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.results,
      totalResults: parseData.totalResults,
      nextPage: parseData.nextPage,
      loading: false,
    });
    console.log(this.state.totalResults);
  }

  handlePrev = async () => {
    let url = `https://newsdata.io/api/1/news?apikey=${
      this.props.api
    }&country=in&category=${this.props.category}&language=en&page=${
      this.state.nextPage - 2
    }`;
    this.setState({ loading: true });
    let data = await fetch(url);

    let parseData = await data.json();
    this.setState({
      articles: parseData.results,
      nextPage: parseData.nextPage,
      loading: false,
    });
  };

  handleNext = async () => {
    let url = `https://newsdata.io/api/1/news?apikey=${this.props.api}&country=in&category=${this.props.category}&language=en&page=${this.state.nextPage}`;
    console.log(url);
    this.setState({ loading: true });
    let data = await fetch(url);

    let parseData = await data.json();
    console.log(parseData.results);
    console.log(parseData.nextPage);
    this.setState({
      articles: parseData.results,
      nextPage: parseData.nextPage,
      loading: false,
    });
  };

  handleSenCase = (str) => {
    let newText = str.charAt(0).toUpperCase() + str.slice(1);
    return newText;
  };

  render() {
    return (
      <div className="container my-3">
        <h1 style={{ textAlign: "center" }} id="news_comp_title">
          GoNews: {this.handleSenCase(this.props.category)} News Headlines India
        </h1>
        {this.state.loading ? <Spinner></Spinner> : <></>}
        <div className="row my-4">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <>
                  <div className="col-md-3 my-4" key={element.pubDate}>
                    <NewsItem
                      title={element.title?.slice(0, 60)}
                      discription={element.description?.slice(0, 88)}
                      newsUrl={element.link}
                      imgUrl={element.image_url}
                    />
                  </div>
                </>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.nextPage <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrev}
            id="prev"
          >
            &laquo; Previous
          </button>
          <button
            disabled={this.state.nextPage == null}
            type="button"
            className="btn btn-dark"
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

export default NewsEntertainment;
