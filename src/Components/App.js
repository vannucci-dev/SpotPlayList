import { Component } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";
import { PlayList } from "./PlayList";

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          Ja<span class="highlight">mmm</span>ing
        </h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">
            <SearchResults />
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
