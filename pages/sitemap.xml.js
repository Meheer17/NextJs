const EXTERNAL_DATA_URL = 'https://meheer.vercel.app/';

export default async function getStaticProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(`${EXTERNAL_DATA_URL}api/projects`);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://meheer.vercel.app/</loc>
     </url>
     <url>
       <loc>https://meheer.vercel.app/projects</loc>
     </url>
     <url>
       <loc>https://meheer.vercel.app/certificates</loc>
     </url>
     <url>
       <loc>https://meheer.vercel.app/aboutme</loc>
     </url>
   </urlset>
 `; // Pass the data here.

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.send(sitemap);
  res.end();

  return {
    props: {},
  };
}