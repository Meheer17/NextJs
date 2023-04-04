const EXTERNAL_DATA_URL = 'https://meheer.vercel.app/';

export default async function web({ res }) {
  // We generate the XML sitemap with the posts data
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://meheer.vercel.app/">
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
  res.write(sitemap);
  res.end();
}