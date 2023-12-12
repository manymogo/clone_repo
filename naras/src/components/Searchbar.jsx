import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Searchbar.module.css';

export default function Searchbar({ q }) {
  const [search, setSearch] = useState('');
  const nav = useNavigate();

  useEffect(() => {
    setSearch(q);
  }, [q]);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickSearch();
    }
  };

  const onClickSearch = () => {
    if (search !== '') {
      nav(`/search?q=${search}`);
    }
  };

  return (
    <div className={style.container}>
      <input value={search} onChange={onChangeSearch} onKeyDown={onKeyDown} placeholder='검색어를 입력하세요...' />
      <button onClick={onClickSearch}>검색</button>
    </div>
  );
}
