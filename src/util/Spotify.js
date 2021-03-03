let accessToken;
let expiresIn;
const clientID = "6876d4de36d542d78309811e5876a360";
const redirectURI = "http://localhost:3000/";

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } else {
      const accessTokenMatch = window.location.href.match(
        /access_token=([^&]*)/
      );
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

      if (accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        expiresIn = expiresInMatch[1];

        window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
        window.history.pushState("Access Token", null, "/");
        return accessToken;
      } else {
        const accessUri = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        window.location = accessUri;
      }
    }
  },
  search(term) {
    const endpoint = `https://api.spotify.com/v1/search?type=track&q=${term}`;
    return fetch(endpoint, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((response) => {
        response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map((track) => ({
          ID: track.id,
          Name: track.name,
          Artist: track.artists[0].name,
          Album: track.album.name,
          URI: track.uri,
        }));
      });
  },
};

//         }
//         throw new Error("Failed Request");
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   },
// };

export default Spotify;
