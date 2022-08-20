import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, discription, imgUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ height: "460px" }}>
          <a href={newsUrl} target="_blank" rel="noreferrer">
            <img
              src={!imgUrl ? "https://shrikrishnaparab.tech/ina.jpg" : imgUrl}
              className="card-img-top"
              alt="New_img"
              style={{ height: "200px" }}
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{discription}...</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
              id="read_more_btn"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
