import { useSearchParams } from 'react-router-dom';
import { fetchSearchResults } from '../api';
import { useEffect } from 'react';

export default function Search() {
  const [countries, setCountries] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q');

  const setInitData = async () => {
    const data = await fetchSearchResults(q);
    setCountries(data);
  };

  useEffect(() => {
    setInitData();
  }, [q]);

  return <div>Search {searchParams.get('q')}</div>;
}
