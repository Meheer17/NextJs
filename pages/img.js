const Upload = () => (
    <form action="https://next-js-opal-xi.vercel.app/api/projects/s3" method="POST" encType="multipart/form-data">
      <input type="file" name="avatar" />
      <button type="submit">submit</button>
    </form>
  );
  
  export default Upload;