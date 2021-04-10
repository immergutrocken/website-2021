module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  async redirects() {
    return [
      {
        source: "/artist/josé-gonzález",
        destination: "/artist/jose-gonzalez",
        permanent: true,
      },
    ];
  },
};
