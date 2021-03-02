import { Component } from "react";
import "./SearchResults.css";
import { TrackList } from "./TrackList";

export class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList />
      </div>
    );
  }
}
