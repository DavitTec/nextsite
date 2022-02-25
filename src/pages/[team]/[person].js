import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Person({ ownersList }) {
  const router = useRouter();

 const [owners, setOwners] = useState(ownersList);
  useEffect(() => {
    async function loadData() {
      const response = await fetch('http://localhost:4001/team?ownerName=' +
      router.query.person +
      '&team=' +
      router.query.team);
      const ownersList = await response.json();
      setOwners(ownersList);
    }

    if(ownersList.length == 0) {
        loadData();
    }
  }, []);

  if(!owners[0]) {
      return <div>loading..not found.</div>
  }

  return <pre>{owners[0]?.details}</pre>;
}

Person.getInitialProps = async ctx => {
    if(!ctx.req) {
        return { ownersList: [] };
    }

  const { query } = ctx;
  const response = await fetch(
    'http://localhost:4001/team?ownerName=' +
      query.person +
      '&team=' +
      query.team
  );
  const ownersList = await response.json();
  return { ownersList: ownersList };
};
