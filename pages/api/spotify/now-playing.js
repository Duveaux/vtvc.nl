import { getNowPlaying } from "../../../lib/spotify";

export default async (_, res) => {
  const response = await getNowPlaying();
  const { is_playing, item } = await response.json();

  return res.status(200).json({
    is_playing,
    title: item.name,
    artist: item.artists[0].name,
    url: item.external_urls.spotify,
  });
};
