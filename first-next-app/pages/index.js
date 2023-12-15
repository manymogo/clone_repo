export default function Home({ name }) {
  return <div>{name}</div>;
}

export const getServerSideProps = async () => {
  return {
    props: {
      name: 'KOREA',
    },
  };
};
