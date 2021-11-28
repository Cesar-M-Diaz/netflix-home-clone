import { RowProps } from '../components/interfaces';

export enum Urls {
  netflixOriginals = 'https://api.themoviedb.org/3/discover/tv?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&with_networks=213',
  trending = 'https://api.themoviedb.org/3/trending/all/week?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&language=en-US',
  topRated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&language=en-US',
  actionMovies = 'https://api.themoviedb.org/3/discover/movie?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&with_genres=28',
  comedyMovies = 'https://api.themoviedb.org/3/discover/movie?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&with_genres=35',
  horrorMovies = 'https://api.themoviedb.org/3/discover/movie?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&with_genres=27',
  romanceMovies = 'https://api.themoviedb.org/3/discover/movie?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&with_genres=10749',
  kidsMovies = 'https://api.themoviedb.org/3/discover/movie?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&with_genres=10751',
  tv = 'https://api.themoviedb.org/3/discover/tv?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&sort_by=popularity.desc&page=1',
  search = 'https://api.themoviedb.org/3/search/multi?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&language=en-US&query=',
  documentaries = 'https://api.themoviedb.org/3/discover/movie?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&with_genres=99',
  animation = 'https://api.themoviedb.org/3/discover/movie?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&with_genres=16',
}

export const moviesData: RowProps[] = [
  {
    title: 'netflix originals',
    url: 'https://api.themoviedb.org/3/discover/tv?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&with_networks=213',
  },
  {
    title: 'trending',
    url: 'https://api.themoviedb.org/3/trending/all/week?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&language=en-US',
  },
  {
    title: 'action',
    url: 'https://api.themoviedb.org/3/discover/movie?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&with_genres=28',
  },
  {
    title: 'comedy',
    url: 'https://api.themoviedb.org/3/discover/movie?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&with_genres=35',
  },
  {
    title: 'horror',
    url: 'https://api.themoviedb.org/3/discover/movie?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&with_genres=27',
  },
  {
    title: 'romance',
    url: 'https://api.themoviedb.org/3/discover/movie?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&with_genres=10749',
  },
  {
    title: 'kids',
    url: 'https://api.themoviedb.org/3/discover/movie?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&with_genres=10751',
  },
  {
    title: 'tv',
    url: 'https://api.themoviedb.org/3/discover/tv?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&sort_by=popularity.desc&page=1',
  },
  // {
  //   title: 'search',
  //   url: 'https://api.themoviedb.org/3/search/multi?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&language=en-US&query=',
  // },
  {
    title: 'documentaries',
    url: 'https://api.themoviedb.org/3/discover/movie?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&with_genres=99',
  },
  {
    title: 'animation',
    url: 'https://api.themoviedb.org/3/discover/movie?api_key=e35de6c99ae117ba7eb0e0fbf06e722e&with_genres=16',
  },
];
