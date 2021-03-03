import { Component } from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { PlayList } from "../PlayList/PlayList";
import Spotify from "../../util/Spotify";

class App extends Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

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
  removeTrack(track) {
    const newList = this.state.playlistTracks.filter(
      (song) => song.id !== track.id
    );
    this.setState({
      playlistTracks: newList,
    });
  }
  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }
  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
  }
  search(search) {
    Spotify.search(search).then((searchResults) => {
      this.setState({ searchResults });
    });
  }

  render() {
    return (
      <div>
        {console.log(this.savePlaylist())}
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <PlayList
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
