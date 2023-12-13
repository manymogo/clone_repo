import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const code = 'KOR';

  const router = useRouter();

  const onClickButton = () => {
    router.push({
      pathname: '/country/[code]',
      query: { code },
    });
  };
  return (
    <div>
      Home Page
      <div>
        <button onClick={onClickButton}>Search</button>
      </div>
      <div>
        <Link href={'/search'}>Search</Link>
      </div>
      <div>
        <Link
          href={{
            pathname: '/country/[code]',
            query: { code: code },
          }}
        >
          {code}
        </Link>
      </div>
    </div>
  );
}
