import React, { Component } from "react";
import NewItem from "./NewItem";

export default class NewsComp extends Component {
  constructor() {
    super();

    // console.log("Hello ! I am constructor");
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=db3992c789f14b5490b0afd6d9a84692";

    let response = await fetch(url);
    let parsed = await response.json();

    this.setState({
      articles: parsed.articles,
    });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsBuzz - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 mb-5" key={element.url}>
                <NewItem
                  title={
                    element.title === null
                      ? "Title Not Found"
                      : element.title.slice(0, 51)
                  }
                  description={
                    element.description === null
                      ? "Description Not Found"
                      : element.description.slice(0, 88)
                  }
                  imgurl={element.urlToImage}
                  newsURL={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
