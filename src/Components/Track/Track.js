import { Component } from "react";
import "./Track.css";

export class Track extends Component {
  renderAction() {
    if (this.props.isRemoval) {
      return <button className="Track-action">+</button>;
    }
    return <button className="Track-action">-</button>;
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}