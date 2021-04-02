interface ISocialMediaElement {
  url: string;
  imageUrl: string;
}

const socialMedia: ISocialMediaElement[] = [
  {
    url: "https://open.spotify.com/user/immergut_festival",
    imageUrl: "/spotify-logo.svg",
  },
  {
    url: "https://www.youtube.com/immergutfestival",
    imageUrl: "/youtube-logo.svg",
  },
  {
    url: "https://www.facebook.com/immergutrocken",
    imageUrl: "/facebook-logo.svg",
  },
  {
    url: "https://instagram.com/immergutrocken",
    imageUrl: "/instagram-logo.svg",
  },
  {
    url: "https://twitter.com/immergutrocken",
    imageUrl: "/twitter-logo.svg",
  },
  {
    url: "https://www.flickr.com/photos/immergutrocken",
    imageUrl: "/flickr-logo.svg",
  },
];

export default socialMedia;
