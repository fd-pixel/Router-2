import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const Home = () => {
  const [albums, setAlbums] = useState();
  const history = useHistory();

  const url = "https://jsonplaceholder.typicode.com/albums";

  const postHandler = (id) => {
    history.push(`/details/${id}`);
    console.log(id);
  };

  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <h2>ALBUMS</h2>

      {albums?.map((album, index) => (
        <div
          key={index}
          style={{
            border: "1px solid",
            marginTop: "1rem",
            width: "50%",
            cursor: "pointer",
          }}
        >
          <p onClick={() => postHandler(album.id)}>
            Title: {album.title.toUpperCase()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
