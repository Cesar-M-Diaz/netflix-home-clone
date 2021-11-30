import { FC } from 'react';
import { Movie } from './interfaces';
import '../assets/styles/components/Movies.scss';

interface Props {
  data: Movie[] | undefined;
  render: (movie: Movie) => JSX.Element;
}

export const MovieItem: FC<Props> = ({ data, render }) => (
  <div className="movies__container">
    {data?.map((movie) => {
      return render(movie);
    })}
  </div>
);
