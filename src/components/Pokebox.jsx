import React, { useEffect, useState } from "react";

export default function DataDisplayer(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${props.id}/`
      );
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  }, [props.id]);
  

  if (data) {
    return (
      <div className="pokemons">
        <img
          src={data.sprites.other["official-artwork"].front_default}
          alt="pokemon image"
        />
        <h1>{data.name} </h1>
      </div>
    );
  } else {
    return null;
  }
}
