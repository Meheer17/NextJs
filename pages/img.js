const Upload = () => (
    <form action="http://localhost:3000/api/projects/s3" method="POST" encType="multipart/form-data">
      <input type="file" name="avatar" />
      <button type="submit">submit</button>
    </form>
  );
  
  export default Upload;