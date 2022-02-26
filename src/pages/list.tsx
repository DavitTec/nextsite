import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

export interface ListProps {
ownersList: TeamPerson[] | undefined;
}

export default function List({ownersList}: ListProps) {
  return (
    <div>

    <h2>Team</h2>
      {ownersList?.map((e, index) => (
        <div key={index}>
          <Link as={`/${e.role}/${e.ownerName}`} href="/[role]/[person]">
            <a>
              Navigate to {e.ownerName}'s {e.role}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
export interface TeamPerson {
  role: string;
  ownerName: string;
  details: string;
}

List.getInitialProps = async () => {
  const response = await fetch('http://localhost:4001/team');
  const ownersList: TeamPerson[] | undefined = await response.json();
  return {ownersList: ownersList}
}
