import { useState, useEffect } from "react";
import { fetchSongs } from "../api/api";

let SONGS_CACHE = null;
let fetchPromise = null; // ✅ shared promise for all components

export default function useFetchSongs(initial = []) {
  const [data, setData] = useState(SONGS_CACHE || initial);

  useEffect(() => {
    // ✅ Already cached → instantly use
    if (SONGS_CACHE) {
      setData(SONGS_CACHE);
      return;
    }

    // ✅ Create only ONE fetch request for whole app
    if (!fetchPromise) {
      fetchPromise = fetchSongs().then((songs) => {
        SONGS_CACHE = songs;
        return songs;
      });
    }

    // ✅ ALL components attach to same promise
    fetchPromise.then((songs) => {
      setData(songs);
    });
  }, []);

  return { data };
}
