import { mdiSpotify } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";

export default function Spotify() {
  const [spotifyInfo, setSpotifyInfo] = useState({
    is_playing: null,
    title: "...",
    artist: "...",
    url: "https://vtvc.nl",
  });

  useEffect(() => {
    async function getSpotifyInfo() {
      let response = await fetch("/api/spotify/now-playing");
      response = await response.json();
      setSpotifyInfo(response);
      setTimeout(() => getSpotifyInfo(), response.is_playing ? 10000 : 30000);
    }

    getSpotifyInfo();
  }, []);

  return (
    <div
      style={{ height: "30px", verticalAlign: "middle", lineHeight: "30px" }}
    >
      {spotifyInfo.is_playing !== null && spotifyInfo.is_playing ? (
        <>
          {" "}
          <Icon
            path={mdiSpotify}
            size={1}
            style={{ marginRight: "15px", position: "relative", top: 5 }}
            color="red"
          />
          <span
            dangerouslySetInnerHTML={{
              __html: `Currently listening to <a href='${spotifyInfo.url}'>${spotifyInfo.title}</a> by ${spotifyInfo.artist}`,
            }}
          />
        </>
      ) : (
        <a href="https://open.spotify.com/user/duveaux" target="_blank">
          Not listening to anything right now!
        </a>
      )}
    </div>
  );
}
