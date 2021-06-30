import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";

const Details = (props) => {
  const [album, setAlbum] = useState();
  const history = useHistory();
  const { id } = useParams();

  const url = `https://jsonplaceholder.typicode.com/albums/${id}`;
  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAlbum(data));
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div>
      <h2>
        Details of The Album
        <div className="box">
          Album{id}
          <p>TITLE</p>
          <p> {album?.title.toUpperCase()}</p>
          <p>
            Country:{" "}
            <img alt="pic" src={`https://api.first.org/data/v1/${id}`} />
          </p>
          <p>
            Singer:{" "}
            <img
              alt="pic"
              src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
            />
            <button onClick={() => history.push("/")}>HOME</button>
          </p>
        </div>
      </h2>
    </div>
  );
};

export default Details;
