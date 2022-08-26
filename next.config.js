module.exports = {
  env: {
      URI: "mongodb+srv://MAHI:1705@mo.jslvt.mongodb.net/Nextjs?retryWrites=true&w=majority",
      URL:"https://next-js-opal-xi.vercel.app/",
      B_NAME: "website-bucket-meheer",
      B_REGION: "ap-south-1",
      B_S_KEY: "Uk327DDrdZAA6hUxRPRjsBfodwou6uLJUvVF7vBl",
      B_A_KEY: "AKIASPC62OMHT2BYPOM3"
  },
  images: {
    domains: ['website-bucket-meheer.s3.ap-south-1.amazonaws.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/:path*'
      }
    ]
  }
}
