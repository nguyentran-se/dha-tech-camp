export const getPhotos = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const response = await fetch(url);
  const photos = await response.json();
  return photos.slice(0, 10);
};

export const renderPhotos = (photos) => {
  return photos.map((p) => {
    return (
      <div>
        <p>Title: {p.title}</p>
        <div>
          <img src={p.thumbnailUrl} alt="photo" />
        </div>
      </div>
    );
  });
};
