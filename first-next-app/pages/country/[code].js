import SubLayout from '@/Components/SubLayout';
import { fetchCountry } from '@/api';
import { useRouter } from 'next/router';

export default function Country({ country }) {
  const router = useRouter();
  const { code } = router.query;

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
    fallback: false,
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
  };
};
