import { useParams } from 'react-router-dom';
import { fetchCountry } from '../api';
import { useEffect, useState } from 'react';

export default function Country() {
  const [country, setCountry] = useState();

  const params = useParams();

  const setInitData = async () => {
    const data = fetchCountry(params.code);
    setCountry(data);
  };

  useEffect(() => {
    setInitData();
  }, [params.code]);

  return <div>Country : {params.code}</div>;
}
