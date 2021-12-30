import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const AddToWatchList = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchList = (e) => {
    e.preventDefault();
    context.addToWatchList(movie);
  };
  return (
    <IconButton aria-label="add to watch List" onClick={handleAddToWatchList}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchList;