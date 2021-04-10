module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  async rewrites() {
    return [
      {
        source: "/artist/josé-gonzález",
        destination: "/artist/jose-gonzalez",
      },
    ];
  },
};
