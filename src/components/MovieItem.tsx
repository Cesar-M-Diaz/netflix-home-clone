import { FC } from 'react';
import { Movie } from './interfaces';
import '../assets/styles/components/Movies.scss';

interface Props {
  data: Movie[];
}

export const MovieItem: FC<Props> = ({ data }) => (
  <div className="movies__container">
    {data.map((movie) => (
      <div key={movie.id} className="movie__item">
        <h2>{movie.name || movie.title}</h2>
        <img
          src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.name || movie.title}
        />
        <p>{movie.overview}</p>
      </div>
    ))}
  </div>
);
