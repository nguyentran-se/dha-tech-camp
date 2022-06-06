import React, { useEffect, useState } from "react";
import { getPhotos, renderPhotos } from "../utils";

function Challenge3() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const startGetPhotos = async () => {
      const photos = await getPhotos();
      console.log(photos);
      setPhotos(photos);
    };
    startGetPhotos();
  }, []);

  return <div>{renderPhotos(photos)}</div>;
}

export default Challenge3;
