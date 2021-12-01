import { FC, useState, useRef } from 'react';
import { MovieItem } from './MovieItem';
import { withFetchProps } from './interfaces';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import '../assets/styles/components/Row.scss';

const Row: FC<withFetchProps> = ({ data, title }) => {
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef: any = useRef();

  const handleClick = (direction: string): void => {
    let distance = listRef.current.getBoundingClientRect().x - 60;
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${1650 + distance}px)`;
    }
    if (direction === 'right' && slideNumber < 2) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-1650 + distance}px)`;
    }
  };

  return (
    <div className="row__container">
      <h1>{title}</h1>
      <MdArrowBackIos
        className={
          slideNumber === 0 ? 'row__arrow-back hidden' : 'row__arrow-back'
        }
        name="back"
        onClick={() => handleClick('left')}
      />
      <div className="row__images" ref={listRef}>
        <MovieItem
          data={data}
          render={(movie) => (
            <div key={movie.id} className="movie__item">
              <h2>{movie.name || movie.title}</h2>
              <img
                src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.name || movie.title}
              />
            </div>
          )}
        />
      </div>
      <MdArrowForwardIos
        className="row__arrow-forward"
        name="forward"
        onClick={() => handleClick('right')}
      />
    </div>
  );
};
export default Row;
