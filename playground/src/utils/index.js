export const getPhotos = async () => {
  const url = 'https://jsonplaceholder.typicode.com/photos';
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
          <img src={p.thumbnailUrl} alt="dummy photos" />
        </div>
      </div>
    );
  });
};

export const fakeLoginApi = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === process.env.REACT_APP_FAKE_USERNAME && password === process.env.REACT_APP_FAKE_PASSWORD) {
        resolve({ username, password });
      } else {
        reject('This user does not exist!');
      }
    }, 1000);
  });
};

export const filterCityByName = (cities, input) => {
  const result = [];
  cities.forEach((c) => {
    if (c.name.includes(input)) result.push(c);
  });
  return result;
};

const localStorage = window.localStorage;

export const getLocalStorage = (key) => {
   try {
      let result = localStorage.getItem(key);
      if (!result) {
         return null;
      }
      return JSON.parse(result);
   } catch (error) {
      console.error(`[getLocalStorage]: ${error.message}`);
   }
};

export const setLocalStorage = (key, value) => {
   try {
      let stringifyValue = JSON.stringify(value);
      localStorage.setItem(key, stringifyValue);
   } catch (error) {
      console.error(`[setLocalStorage]: ${error.message}`);
   }
};