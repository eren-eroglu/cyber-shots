import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";

const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;
const accessKey = import.meta.env.VITE_REACT_APP_ACCESS_KEY;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    url = `${mainUrl}?client_id=${accessKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);
  return <h2>stock photos starter</h2>;
};

export default App;
