import { useRouter } from 'next/router';
import style from './CountryItem.module.css';
import Image from 'next/image';

export default function CountryItem({ code, commonName, flagEmoji, flagImg, population, region, capital }) {
  const router = useRouter();

  const onClickItem = () => {
    router.push(`/country/${code}`);
  };

  return (
    <div className={style.container} onClick={onClickItem}>
      <div className={style.flag_img}>
        <Image src={flagImg} fill />
      </div>
      <div className={style.content}>
        <div className={style.name}>
          {flagEmoji} {commonName}
        </div>
        <div>지역 : {region}</div>
        <div>수도 : {capital.join(',')}</div>
        <div>인구 : {population}</div>
      </div>
    </div>
  );
}
