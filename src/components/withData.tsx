import React, { useEffect, useState } from 'react';
import { MovieList, RowProps } from './interfaces';

function withFetch(WrappedComponent: React.ComponentType<any>) {
  const WithFetch = (props: RowProps) => {
    const [data, setData] = useState<MovieList>();
    const url: string = props.url;

    useEffect(() => {
      if (url) fetchData(url);
    }, [url]);

    const fetchData = async (url: string) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setData(data.results);
        } else {
          throw new Error('Fetch request error');
        }
      } catch (err) {}
    };

    return <WrappedComponent data={data} {...props} />;
  };

  return WithFetch;
}

export default withFetch;
