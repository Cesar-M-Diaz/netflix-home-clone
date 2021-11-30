import Row from '../components/Row';
import Banner from '../components/Banner';
import { moviesData } from '../components/data';
import { withFetchProps } from '../components/interfaces';
import withFetch from '../components/withData';
import '../assets/styles/pages/Home.scss';

function Home() {
  const RowWithData = withFetch(Row);
  const BannerWithData = withFetch(Banner);

  return (
    <div className="home__body">
      <BannerWithData url="https://api.themoviedb.org/3/discover/tv?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&with_networks=213" />
      <div className="home__row-container">
        {moviesData.map((movieData: withFetchProps, idx) => (
          <RowWithData key={idx} url={movieData.url} title={movieData.title} />
        ))}
      </div>
    </div>
  );
}

export default Home;
