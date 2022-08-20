import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, discription, imgUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card" style={{ height: "550px" }}>
          <div
            style={{
              right: "0",
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
            }}
          >
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <a href={newsUrl} target="_blank" rel="noreferrer">
            <img
              src={!imgUrl ? "https://shrikrishnaparab.tech/ina.jpg" : imgUrl}
              className="card-img-top"
              alt="New_img"
              style={{ height: "200px" }}
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}...</p>
            <p className="card-text">
              <small className="text-warning">
                By{" "}
                <span style={{ fontWeight: "600", fontStyle: "italic" }}>
                  {!author ? "Unknown" : author}
                </span>
                <br></br>Updated on:{" "}
                <span
                  style={{
                    fontWeight: "500",
                    fontStyle: "italic",
                    fontSize: "12px",
                  }}
                >
                  {new Date(date).toGMTString()}
                </span>
              </small>
            </p>
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
