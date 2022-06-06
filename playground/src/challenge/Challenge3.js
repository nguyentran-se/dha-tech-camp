import React, { useState } from "react";
import { getPhotos, renderPhotos } from "../utils";
// 💪 using getPhotos to get data from calling API
function Challenge3() {
  const [photos, setPhotos] = useState([]);

  return <div>{renderPhotos(photos)}</div>;
}

export default Challenge3;
