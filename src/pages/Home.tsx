import Row from '../components/Row';
import { moviesData } from '../components/data';
import { RowProps } from '../components/interfaces';
import { withLoading } from '../components/withLoader';

function Home() {
  return (
    <div>
      {moviesData.map((movieData: RowProps, idx) => (
        <Row key={idx} url={movieData.url} title={movieData.title} />
      ))}
    </div>
  );
}

export default Home;
