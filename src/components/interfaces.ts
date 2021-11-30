export interface Movie {
  id: number;
  name?: string;
  title?: string;
  poster_path: string;
  overview: string;
}

export interface MovieList {
  results: Movie[];
}

export interface RowProps {
  url: string;
  title: string;
}

export interface withFetchProps {
  data?: Movie[];
  title?: string;
  url: string;
}
