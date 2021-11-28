import { FC } from 'react';
import { MovieItem } from './MovieItem';
import '../assets/styles/components/Row.scss';

interface Props {
  data: any;
  title: string;
}

const Row: FC<Props> = ({ data, title }) => {
  return (
    <div className="row__container">
      <h1>{title}</h1>
      <MovieItem data={data} />
    </div>
  );
};
export default Row;
