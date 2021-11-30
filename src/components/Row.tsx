import { FC } from 'react';
import { MovieItem } from './MovieItem';
import { withFetchProps } from './interfaces';
import '../assets/styles/components/Row.scss';

const Row: FC<withFetchProps> = ({ data, title }) => {
  return (
    <div className="row__container">
      <h1>{title}</h1>
      <MovieItem
        data={data}
        render={(movie) => (
          <div key={movie.id} className="movie__item">
            <h2>{movie.name || movie.title}</h2>
            <img
              src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.name || movie.title}
            />
            <p>{movie.overview}</p>
          </div>
        )}
      />
    </div>
  );
};
export default Row;
