import { Component } from "react";
import { TrackList } from "./TrackList";

export class PlayList extends Component {
  render() {
    return (
      <div class="Playlist">
        <input value="New Playlist" />
        <TrackList />
        <button class="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}
