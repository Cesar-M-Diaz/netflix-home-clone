import React, { useEffect, useState } from 'react';
import { MovieList, withFetchProps } from './interfaces';

function withFetch<OriginalProps extends withFetchProps>(
  WrappedComponent: React.ComponentType<OriginalProps>,
) {
  const WithFetch = (props: OriginalProps) => {
    const [data, setData] = useState<MovieList>();
    const url = props.url;

    useEffect(() => {
      fetchData(url);
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

    return <WrappedComponent {...props} data={data} />;
  };

  return WithFetch;
}

export default withFetch;
