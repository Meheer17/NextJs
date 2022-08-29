module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  env: {
      URI: "mongodb+srv://MAHI:1705@mo.jslvt.mongodb.net/Nextjs?retryWrites=true&w=majority",
      URL:"https://next-js-opal-xi.vercel.app/",
      B_NAME: "website-bucket-meheer",
      B_REGION: "ap-south-1",
  },
  images: {
    domains: ['website-bucket-meheer.s3.ap-south-1.amazonaws.com'],
  }
}
