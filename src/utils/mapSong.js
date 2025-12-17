export function mapSongs(songs = []) {
  return songs.map(song => {
    const singers = song.singers?.map(s => s.name) || [];
    const poets = song.poets?.map(p => p.name) || [];

    let subtitle = "";

    if (singers.length > 0) {
      subtitle += `sing ${singers.join(" & ")}`;
    }

    if (poets.length > 0) {
      // Add newline only if singers already exist
      subtitle += `${singers.length > 0 ? "\n" : ""}poet ${poets.join(" & ")}`;
    }

    return {
      id: song.id,
      img: song.thumbnailURL
        ? `https://ajabshahar.com${song.thumbnailURL}`
        : "/img1.svg",
      title: song.metaTitle || "Untitled Song",
      umbrellaTitle: song.umbrellaTitle.englishTranslation || "",
      subtitle,
      desc: ((song.metaDescription || "").substring(0, 160) + "...").trim(),
      linkText: "EXPLORE SONG",
    };
  });
}
