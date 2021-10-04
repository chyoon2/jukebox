import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "alabama", duration: "3:05" },
    { title: "all star", duration: "2:55" },
    { title: "i want it", duration: "4:00" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
