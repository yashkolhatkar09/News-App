import React, { Component } from "react";
import NewItem from "./NewItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class NewsComp extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 20,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=db3992c789f14b5490b0afd6d9a84692&pagesize=${this.props.pagesize}`;
    // console.log(this.props.country);
    let response = await fetch(url);
    let parsed = await response.json();

    this.setState({
      articles: parsed.articles,
      totalResults: parsed.totalResults,
    });
  }

  handlePrevClick = async () => {
    console.log(this.state.page);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=db3992c789f14b5490b0afd6d9a84692&page=${
      this.state.page - 1
    }&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let response = await fetch(url);
    let parsed = await response.json();

    this.setState({
      articles: parsed.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };
  handleNextClick = async () => {
    console.log(this.state.page);
    if (Math.ceil(this.state.totalResults / 20) < this.state.page + 1) {
      // page handling
      return;
    }
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=db3992c789f14b5490b0afd6d9a84692&page=${
      this.state.page + 1
    }&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let response = await fetch(url);
    let parsed = await response.json();

    this.setState({
      articles: parsed.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };

  render() {
    let { mode } = this.props;
    let defaultimg =
      "https://th.bing.com/th/id/OIP.g1JO9ZrlnaJoFq4qUGVZsQHaE7?rs=1&pid=ImgDetMain";
    return (
      <div className="container my-6">
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            onClick={this.handlePrevClick}
            // className={`btn btn-${mode === "light" ? "light" : "grey"}`}
            className={`btn btn-${mode === "light" ? "dark" : "light"}`}
            disabled={this.state.page === 1}
          >
            Previous
          </button>
          <button
            type="button"
            onClick={this.handleNextClick}
            disabled={
              Math.ceil(this.state.totalResults / this.props.pagesize) <
              this.state.page + 1
            }
            // className={`btn btn-${mode === "light" ? "dark" : "grey"}`}
            className={`btn btn-${mode === "light" ? "dark" : "light"}`}
          >
            Next
          </button>
        </div>
        <h2
          className={`text-${mode === "light" ? "dark" : "light"} text-center`}
        >
          NewsBuzz - Top Headlines
        </h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 mb-5" key={element.url && this.props.key}>
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
                  imgurl={
                    element.urlToImage === null
                      ? defaultimg
                      : element.urlToImage
                  }
                  newsURL={element.url}
                  mode={mode}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          {/* <div class="">...</div> */}
          <button
            type="button"
            onClick={this.handlePrevClick}
            className={`btn btn-${mode === "light" ? "dark" : "light"}`}
            disabled={this.state.page === 1}
          >
            Previous
          </button>
          <button
            type="button"
            onClick={this.handleNextClick}
            className={`btn btn-${mode === "light" ? "dark" : "light"}`}
            disabled={
              Math.ceil(this.state.totalResults / this.props.pagesize) <
              this.state.page + 1
            }
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
