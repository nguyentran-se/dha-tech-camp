
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
          <img src={p.thumbnailUrl} alt="dummy photos"  />
        </div>
      </div>
    );
  });
};

export const fakeLoginApi = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === process.env.REACT_APP_FAKE_USERNAME && password === process.env.REACT_APP_FAKE_PASSWORD) {
        resolve({username, password});
      }else {
        reject('This user does not exist!')
      }
    }, 1000)
  })
}