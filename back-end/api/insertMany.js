import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";
const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistArrayObj = { ...currentArtistObj };
  delete newArtistArrayObj.id;

  return newArtistArrayObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongArrayObj = { ...currentSongObj };
  delete newSongArrayObj.id;

  return newSongArrayObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistArray);

console.log(responseSongs);
console.log(responseArtists);
