export async function fetchSongs() {
  try {
    const res = await fetch("https://ajabshahar.com/api/songs/getPublishedSongs");
    const data = await res.json();
    return data.songs || [];
  } catch (err) {
    console.error("Error fetching songs:", err);
    return [];
  }
}
