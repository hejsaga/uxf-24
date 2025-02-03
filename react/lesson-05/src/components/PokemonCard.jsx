import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const PokemonCard = ({ url }) => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div key={data.name} className="card">
      <img src={data.sprites.front_default} />
      <p>{data.name}</p>
    </div>
  );
};

export default PokemonCard;
