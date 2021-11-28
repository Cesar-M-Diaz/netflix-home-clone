import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { MovieItem } from './MovieItem';
import { Movie, MovieList, RowProps } from './interfaces';
import '../assets/styles/components/Row.scss';

const Row: FC<RowProps> = ({ url, title }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get<MovieList>(url);
        const data: Movie[] = res.data.results;
        setMovies(data);
      } catch {
        console.log('error');
      }
    }
    fetchData();
  }, [url]);

  return (
    <div className="row__container">
      <h1>{title}</h1>
      <MovieItem data={movies} />
    </div>
  );
};
export default Row;
