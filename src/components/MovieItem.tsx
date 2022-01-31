import { FC } from 'react';
import { Movie } from './interfaces';
import '../assets/styles/components/Movies.scss';

interface Props {
  data: Movie[] | undefined;
  render: (movie: Movie) => JSX.Element;
}

export const MovieItem: FC<Props> = ({ data, render }) => (
  // if i only pass render inside map i wont have to use the regular sintax
  // the syntax already happens within the render prop
  <div className="movies__container">{data?.map(render)}</div>
);
