let accessToken;
let expiresIn;
const clientID = "6876d4de36d542d78309811e5876a360";
const redirectURI = "/";

const Spotify = {
  getAccessToken() {
    if (accessToken) return accessToken;
    else if (
      window.location.href.match(/access_token=([^&]*)/) &&
      window.location.href.match(/expires_in=([^&]*)/)
    ) {
      accessToken = window.location.href.match(/access_token=([^&]*)/)[1];
      expiresIn = window.location.href.match(/expires_in=([^&]*)/)[1];

      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");

      return accessToken;
    } else {
      let url = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location = url;
    }
  },
  search(term) {
    const endpoint = `https://api.spotify.com/v1/search?type=track&q=${term}&limit=10`;
    return fetch(endpoint, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.tracks) {
          return jsonResponse.tracks.items.map((track) => {
            return {
              id: track.id,
              name: track.name,
              artist: track.artists[0].name,
              album: track.album.name,
              uri: track.uri,
            };
          });
        } else return [];
      });
  },
  savePlaylist(name, trackUris) {
    if (!(name && trackUris)) return;

    let headers = { Authorization: `Bearer ${accessToken}` };

    fetch("https://api.spotify.com/v1/me", { headers: headers })
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (!jsonResponse.id) return;
        let userID = jsonResponse.id;

        fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
          headers: headers,
          method: "POST",
          body: JSON.stringify({ name: name }),
        })
          .then((response) => response.json())
          .then((jsonSecondResponse) => {
            if (!jsonSecondResponse.id) return;
            let playlistID = jsonSecondResponse.id;

            fetch(
              `https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
              {
                headers: headers,
                method: "POST",
                body: JSON.stringify({ uris: trackUris }),
              }
            );
          });
      });
  },
};

export default Spotify;
