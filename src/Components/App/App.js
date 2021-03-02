import { Component } from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { PlayList } from "../PlayList/PlayList";

class App extends Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);

    this.state = {
      searchResults: [
        {
          name: "Driver Licenze",
          artist: "Olivia Rodrigo",
          album: "Rodra",
          id: 1,
        },
        { name: "Adult Mom", artist: "Sober", album: "Epitah", id: 2 },
      ],
      playlistName: "New Playlist",
      playlistTracks: [
        { name: "Adult Dad", artist: "Sober", album: "Epitah", id: 3 },
        { name: "Adult Auntie", artist: "Drunk", album: "Epitar", id: 4 },
        { name: "Adult Uncle", artist: "Asleep", album: "Epitaf", id: 5 },
      ],
    };
  }
  addTrack(track) {
    if (
      this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)
    ) {
      return;
    } else {
      this.setState({
        playlistTracks: [...this.state.playlistTracks, track],
      });
    }
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
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <PlayList
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
