import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsWorld extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      nextPage: 1,
    };
  }

  async updateNews(page) {
    let url = `https://newsdata.io/api/1/news?apikey=${this.props.api}&country=in&category=${this.props.category}&language=en&page=${page}`;
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
  }

  async componentDidMount() {
    let page = 0;
    this.updateNews(page);
  }

  fetchMoreData = async () => {
    let page = this.state.nextPage;
    let url = `https://newsdata.io/api/1/news?apikey=${this.props.api}&country=in&category=${this.props.category}&language=en&page=${page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    console.log(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.results),
      totalResults: parseData.totalResults,
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
      <>
        <h1 style={{ textAlign: "center" }} id="news_comp_title">
          GoNews: Top News Headlines India
        </h1>
        {/* {this.state.loading ? <Spinner></Spinner> : <></>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.nextPage}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row my-4">
              {this.state.articles.map((element) => {
                return (
                  <>
                    <div className="col-md-3 my-4 " key={element.pubDate}>
                      <NewsItem
                        title={
                          element.title.length < 60
                            ? element.title
                            : element.title?.slice(0, 60) + "..."
                        }
                        discription={element.description?.slice(0, 88)}
                        newsUrl={element.link}
                        imgUrl={element.image_url}
                        date={element.pubDate}
                        author={element.creator}
                        source={element.source_id}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default NewsWorld;
