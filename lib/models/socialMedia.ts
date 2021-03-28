interface ISocialMediaElement {
  url: string;
  imageUrl: string;
  width: number;
  height: number;
}

const socialMedia: ISocialMediaElement[] = [
  {
    url: "https://open.spotify.com/user/immergut_festival",
    imageUrl: "/spotify-logo.svg",
    width: 32,
    height: 22,
  },
  {
    url: "https://www.youtube.com/immergutfestival",
    imageUrl: "/youtube-logo.svg",
    width: 28,
    height: 32,
  },
  {
    url: "https://www.facebook.com/immergutrocken",
    imageUrl: "/facebook-logo.svg",
    width: 16,
    height: 31,
  },
  {
    url: "https://instagram.com/immergutrocken",
    imageUrl: "/instagram-logo.svg",
    width: 28,
    height: 28,
  },
  {
    url: "https://twitter.com/immergutrocken",
    imageUrl: "/twitter-logo.svg",
    width: 27,
    height: 22,
  },
  {
    url: "https://www.flickr.com/photos/immergutrocken",
    imageUrl: "/flickr-logo.svg",
    width: 28,
    height: 28,
  },
];

export default socialMedia;
