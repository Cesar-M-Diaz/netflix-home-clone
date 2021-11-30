import { withFetchProps, Movie } from '../components/interfaces';
import { FC } from 'react';
import '../assets/styles/components/Banner.scss';

export const Banner: FC<withFetchProps> = ({ data }) => {
  const index: number = data ? Math.floor(Math.random() * data.length) : 0;
  const movie: Movie = data
    ? data[index]
    : { id: 0, title: '', poster_path: '', overview: '' };

  return (
    <div className="banner__container">
      <img
        src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt="poster"
      />
      <div className="banner__img-overlay"></div>
      <h1>{movie.name}</h1>
      <p>{movie.overview}</p>
      <div className="banner__buttons-container">
        <button className="banner__play-button">Play</button>
        <button className="banner__more-info-button">More Info</button>
      </div>
      <div className="banner__age">16+</div>
    </div>
  );
};

export default Banner;
