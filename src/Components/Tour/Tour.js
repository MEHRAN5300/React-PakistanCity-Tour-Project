import React, { Component } from "react";
import "./tour.scss";

export default class Tour extends Component {
  state = {
    ShowInfo: false,
  };

  handleInfo = () => {
    this.setState({ ShowInfo: !this.state.ShowInfo });
  };

  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="image-Container">
          <img src={img} alt="Tour-img" />
          <span className="Close-btn" onClick={() => removeTour(id)}>
            <i className="fa fa-window-close"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this.handleInfo}>
              <i className="fa fa-caret-square-o-down"></i>
            </span>
          </h5>
          {this.state.ShowInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
