import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import useGenres from "../hooks/useGenres";
import apiClient from "../services/api-client";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
