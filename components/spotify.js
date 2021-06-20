import { mdiSpotify } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";
import { Tooltip } from "@material-ui/core";

export default function Spotify() {
  const [spotifyInfo, setSpotifyInfo] = useState({
    is_playing: null,
    title: "...",
    songUrl: "https://vtvc.nl",
    artist: "...",
    artistUrl: "https://vtvc.nl",
    albumName: "...",
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
          Currently listening to{" "}
          <Tooltip
            placement="bottom"
            title={`From the album '${spotifyInfo.albumName}'`}
          >
            <a href={spotifyInfo.songUrl} target="_blank">
              {spotifyInfo.title}
            </a>
          </Tooltip>{" "}
          by{" "}
          <a href={spotifyInfo.artistUrl} target="_blank">
            {spotifyInfo.artist}
          </a>
        </>
      ) : (
        <a href="https://open.spotify.com/user/duveaux" target="_blank">
          Not listening to anything right now!
        </a>
      )}
    </div>
  );
}
