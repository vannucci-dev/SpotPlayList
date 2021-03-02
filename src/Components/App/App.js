import { Component } from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { PlayList } from "../PlayList/PlayList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {
          name: "Driver Licenze",
          artist: "Olivia Rodrigo",
          album: "Rodra",
          id: 3,
        },
        {
          name: "Adult Mom",
          artist: "Sober",
          album: "Epitah",
          id: 4,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
