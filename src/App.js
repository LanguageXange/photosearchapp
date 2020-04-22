import React, { useState, useEffect } from "react";
import ImageCard from "./components/imageCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [images, setImages] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_API}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  // dependency meaning that whenever term change it will run again to fetch

  return (
    <div className="container mx-auto ">
      <h2 className="text-center text-4xl font-bold">React & Tailwind CSS</h2>
      <SearchBar searchText={(text) => setTerm(text)} />
      {Loading ? (
        <h1> Loading ...</h1>
      ) : (
        <div className="grid grid-cols-3 gap4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
