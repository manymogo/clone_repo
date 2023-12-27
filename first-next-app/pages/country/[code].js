import SubLayout from '@/components/SubLayout';
import { fetchCountry } from '@/api';
import { useRouter } from 'next/router';

export default function Country({ country }) {
  const router = useRouter();
  const { code } = router.query;

  if (router.isFallback) {
    return <div>Loading . . .</div>;
  }

  if (!country) {
    return <div>존재하지 않는 국가입니다</div>;
  }

  return (
    <div>
      {country.commonName} {country.officialName}
    </div>
  );
}

Country.Layout = SubLayout;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { code: 'ABW' } }, { params: { code: 'KOR' } }],
    fallback: true, // data가 비어있는 fallback 상태의 html을 먼저 받은 뒤, props를 전달 받음
  };
};

export const getStaticProps = async (context) => {
  const { code } = context.params;

  let country = null;
  if (code) {
    country = await fetchCountry(code);
  }

  return {
    props: {
      country,
    },
    revalidate: 3,
  };
};
