import React, { Component } from "react";

export class NewItem extends Component {
  defaultImg =
    "https://th.bing.com/th/id/OIP.vdwA2ra5ZCuwi313ad4ghwHaEL?rs=1&pid=ImgDetMain";
  render() {
    let { title, description, imgurl, newsURL, mode } = this.props;
    return (
      <div>
        <div
          className={`card bg-${mode === "light" ? "light" : "dark"}`}
          style={{
            width: "18rem",
            height: "60vh",
            color: `${mode === "light" ? "black" : "white"}`,
          }}
        >
          <img
            src={imgurl === null ? this.defaultImg : imgurl}
            className="card-img-top"
            alt="img"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsURL}
              target="_blank"
              className={`btn btn-${mode === "light" ? "dark" : "primary"}`}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;
