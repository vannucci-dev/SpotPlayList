# SpotPlayList

This project was created to showcase the use of React components, API calls and state management.

## Functionalities

The purpose of this app is to create, throught the use of React components, passing state, and requests with the Spotify API, an app that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.

### Please note

The access token and client ID for the request to the Spotify API had been removed from the repository as sensitive information.
If you want to test the APP, please sign up to Spotify developers and request a client-id to insert in Spotify.js

## Version 1.2

### Feature request: Track samples

### OBJECTIVE

Include preview samples for each track.

### BACKGROUND

At the current state, SpotPlayList presents a list of tracks in response to an API request to Spotify.
The tracklist shows an array of track components each of which includes, the track name, the artist, the album, and the button to add the track to the playlist.

### TECHNICAL DESIGN

The track-sample widget will be rendered on the side of the track information div.
In order to add the widget, an iFrame will be added in the Track component, using the ID already present in the props passed to the component, it will be possible to customize the URL passed to the iFrame as well as provide a unique key element.
The addition of the widget will require a minor adjustment in the CSS of the Track component, in order to readjust the flex.

### CAVEATS

This solution relies on an iFrame, a quite obsolete feature of HTML5 that, unfortunately, doesn’t have an adequate substitute at this day. The design of the embed is customisable up to a certain point and if a different style is required, a new custom iFrame will need to be created.

![screenshot](./SpotPlayList.png)
