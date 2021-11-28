import Row from '../components/Row';
import { moviesData } from '../components/data';
import { RowProps } from '../components/interfaces';
import withFetch from '../components/withData';

function Home() {
  const RowWithData = withFetch(Row);

  return (
    <div>
      {moviesData.map((movieData: RowProps, idx) => (
        <RowWithData key={idx} url={movieData.url} title={movieData.title} />
      ))}
    </div>
  );
}

export default Home;
