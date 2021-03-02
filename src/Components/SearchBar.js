import { Component } from "react";
import "./SearchBar.css";

export class SearchBar extends Component {
  render() {
    return (
      <div class="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <button class="SearchButton">SEARCH</button>
      </div>
    );
  }
}
