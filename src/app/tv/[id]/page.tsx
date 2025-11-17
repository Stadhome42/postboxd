import React from 'react';
import { getTVShow, TVShow } from '@/lib/tmbd';

interface Props {
  params: { id: string };
}

export default async function TVShowPage({ params }: Props) {
  const { id } = await params;  // unwrap the Promise

  const tvShow: TVShow = await getTVShow(id);

  return (
    <div className="tv-show-page">
      <h1>{tvShow.name}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
        alt={tvShow.name}
      />
      <p>{tvShow.overview}</p>
      <p>First Air Date: {tvShow.first_air_date}</p>
      <div>
        Genres:
        {tvShow.genres.map((genre) => (
          <span key={genre.id}>{genre.name} </span>
        ))}
      </div>
    </div>
  );
}
